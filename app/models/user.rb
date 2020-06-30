class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :DOB, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        (user && user.is_password?(password)) ? user : false
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    
    has_many :deviations,
        foreign_key: :artist_id,
        class_name: :Deviation
        
    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment

    has_many :replies,
        through: :comments;
        source: :replies;

    has_many :deviation_comments,
        through: :deviations,
        source: :comments

end

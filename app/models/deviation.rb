class Deviation < ApplicationRecord
    validates :title, :description, presence: true
    validate :ensure_artwork #for custom validations it is validate (no s)

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_one_attached :artwork

    has_many :user_favorites,
      foreign_key: :deviation_id,
      class_name: :Favorite

    has_many :comments,
        foreign_key: :deviation_id,
        class_name: :Comment

    def ensure_artwork
        unless self.artwork.attached?
            errors[:artwork] << "must be attached"
        end
    end
end

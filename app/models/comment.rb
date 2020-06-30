class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :deviation,
        foreign_key: :deviation_id,
        class_name: :Deviation

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :parent_comment,
        foreign_key: :parent_id,
        class_name: :Comment,
        optional: true

    has_many :replies
        foreign_key: :parent_id,
        class_name: :Comment
        
end

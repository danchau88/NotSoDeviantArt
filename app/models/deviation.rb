class Deviation < ApplicationRecord
    validates :title, :description, presence: true

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_one_attached :artwork

    has_many :comments,
        foreign_key: :deviation_id,
        class_name: :Comment
end

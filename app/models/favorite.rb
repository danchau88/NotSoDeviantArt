class Favorite < ApplicationRecord
  validates :user_id, uniqueness: {scope: :deviation:id}

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
  
    belongs_to :deviation,
    foreign_key: :deviation_id,
    class_name: :Deviation
    
end

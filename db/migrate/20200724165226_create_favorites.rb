class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :deviation_id, null: false

      t.timestamps
    end
    # brackets neeeded to make the pairing of ids unique + indexed
    add_index :favorites, [:user_id, :deviation_id], unique:true
  end
end

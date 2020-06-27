class CreateDeviations < ActiveRecord::Migration[5.2]
  def change
    create_table :deviations do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :deviations, :title
    add_index :deviations, :artist_id
  end
end

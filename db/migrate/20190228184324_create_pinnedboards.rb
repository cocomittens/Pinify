class CreatePinnedboards < ActiveRecord::Migration[5.2]
  def change
    create_table :pinnedboards do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false
      t.timestamps
    end
    add_index :pinnedboards, [:pin_id, :board_id], unique: true
    add_index :pinnedboards, :board_id, unique: true
  end
end

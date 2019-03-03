class ChangePinsBoardsIndex < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins_boards, :pin_id
    add_column :pins_boards, :pin_id, :integer
    add_index :pins_boards, [:pin_id, :board_id], unique: true

  end
end

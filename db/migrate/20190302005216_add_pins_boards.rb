class AddPinsBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :pins_boards do |t|
 
      t.references :pin, index: true, foreign_key: true
      t.references :board, index: true, foreign_key: true

      t.timestamps
    end
  end
end

class CreateApiBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :api_boards do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.timestamps
    end
    add_index :api_boards, :author_id
  end
end

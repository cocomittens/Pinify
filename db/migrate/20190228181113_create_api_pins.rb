class CreateApiPins < ActiveRecord::Migration[5.2]
  def change
    create_table :api_pins do |t|
      t.integer :author_id, null: false
      t.string :title
      t.string :link_url
      t.timestamps
    end
    add_index :api_pins, :author_id
  end
end

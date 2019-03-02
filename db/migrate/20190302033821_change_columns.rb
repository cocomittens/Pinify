class ChangeColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :image_url
    add_column :pins, :board_id, :integer
  end
end

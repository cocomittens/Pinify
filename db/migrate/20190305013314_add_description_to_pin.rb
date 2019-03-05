class AddDescriptionToPin < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :description, :text
  end
end
class AddForeignKey < ActiveRecord::Migration[5.2]
  def change
     rename_table :api_pins, :pins
  end 
end

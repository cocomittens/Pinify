class RenameBoardsPins < ActiveRecord::Migration[5.2]
  
  def change
     rename_table :api_boards, :boards
  end 
end

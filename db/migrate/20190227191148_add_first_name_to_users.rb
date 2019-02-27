class AddFirstNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :api_users, :first_name, :string
    add_column :api_users, :last_name, :string
  end
end

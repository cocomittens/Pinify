class DropApiUsersTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :api_users
  end
end

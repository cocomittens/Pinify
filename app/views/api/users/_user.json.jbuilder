json.set! user.id do 
  json.extract! user, :id, :username, :email, :first_name, :last_name
end
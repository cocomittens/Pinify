Users:

| name            | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not_null, primary key     |
| username        | string    | not_null, indexed, unique |
| email           | string    | not_null, indexed, unique |
| password_digest | string    | not_null                  |
| session_token   | string    | not_null                  |
| created_at      | datetime  | not_null                  |
| updated_at      | datetime  | not_null                  |

add_index username, unique: true  
add_index session_token, unique: true

Boards: 

| name       | data type | details                        |
|------------|-----------|--------------------------------|
| id         | integer   | not_null, primary key          |
| title      | string    | not_null                       |
| author_id  | integer   | not_null, indexed, foreign key |
| created_at | datetime  | not_null                       |
| updated_at | datetime  | not_null                       |

author_id references users  
add_index author_id

Pins:

| name       | data type | details               |
|------------|-----------|-----------------------|
| id         | integer   | not_null, primary key |
| title      | string    | not_null              |
| author_id  | integer   | not_null, foreign key |
| created_at | datetime  | not_null              |
| updated_at | datetime  | not_null              |

author_id references users  
add_index author_id

PinnedBoards:

| name       | data type | details                        |
|------------|-----------|--------------------------------|
| id         | integer   | not_null, primary key          |
| board_id   | integer   | not_null, indexed, foreign key |
| pin_id     | integer   | not_null, indexed, foreign key |
| created_at | datetime  | not_null                       |
| updated_at | datetime  | not_null                       |

board_id references boards  
pin_id references pins  
add_index board_id  
add_index pin_id

Follows:

| name        | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not_null, primary key |
| follower_id | integer   | not_null              |
| followed_id | integer   | not_null              |
| created_at  | datetime  | not_null              |
| updated_at  | datetime  | not_null              |

follower_id references users  
followed_id references users  
add_index follower_id, unique: true  
add_index followed_id, unique: true

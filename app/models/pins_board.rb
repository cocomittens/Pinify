# == Schema Information
#
# Table name: pins_boards
#
#  id         :bigint(8)        not null, primary key
#  pin_id     :bigint(8)
#  board_id   :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PinsBoard < ApplicationRecord
    belongs_to :pin
    belongs_to :board
end

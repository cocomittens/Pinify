# == Schema Information
#
# Table name: pins_boards
#
#  id         :bigint(8)        not null, primary key
#  board_id   :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  pin_id     :integer
#

class PinsBoard < ApplicationRecord
    validates :pin_id, :board_id, presence: true
    belongs_to :pin
    belongs_to :board
end

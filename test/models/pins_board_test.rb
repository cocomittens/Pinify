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

require 'test_helper'

class PinsBoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

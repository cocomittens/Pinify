# == Schema Information
#
# Table name: pinnedboards
#
#  id         :bigint(8)        not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pinnedboard < ApplicationRecord
    belongs_to :pins
    belongs_to :boards
end

# == Schema Information
#
# Table name: api_boards
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Api::BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

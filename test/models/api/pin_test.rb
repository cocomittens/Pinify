# == Schema Information
#
# Table name: api_pins
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  title      :string
#  link_url   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Api::PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

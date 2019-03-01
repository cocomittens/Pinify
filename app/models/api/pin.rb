# == Schema Information
#
# Table name: pins
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  title      :string
#  link_url   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string
#

class Pin < ApplicationRecord
    validates :author_id, presence: true
    has_many :pinned_boards
    has_many :boards, through: :pinned_boards
end

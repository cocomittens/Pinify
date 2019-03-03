# == Schema Information
#
# Table name: boards
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord
    validates :author_id, :title, presence: true
    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
    has_many :pins_boards
    has_many :pins, :through => :pins_boards
end

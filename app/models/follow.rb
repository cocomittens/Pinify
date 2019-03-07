# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
    validates :followed_id, :follower_id, presence: true
    belongs_to :follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User
    belongs_to :followed,
        primary_key: :id,
        foreign_key: :followed_id,
        class_name: :User
end

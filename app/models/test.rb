# == Schema Information
#
# Table name: tests
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Test < ApplicationRecord
  validates :name, length: {maximum: 30}, presence: true
end

class DescriptionSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_one :project
end

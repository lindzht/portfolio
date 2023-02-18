class ProjskillSerializer < ActiveModel::Serializer
  attributes :id
  has_one :projects
  has_one :skills
end

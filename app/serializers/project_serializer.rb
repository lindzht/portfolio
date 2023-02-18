class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :gh, :gh_front, :gh_back, :demo, :header
end

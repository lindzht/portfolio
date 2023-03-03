class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :thumbnail, :gh, :gh_front, :gh_back, :demo, :header, :created_at, :date_created

  has_many :skills
  has_many :images


  def skills 
    object.skills.order(name: :asc)
  end

end

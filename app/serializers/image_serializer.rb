class ImageSerializer < ActiveModel::Serializer
  attributes :hero, :detail_1, :detail_2, :detail_3, :detail_4, :detail_5, :detail_6
  has_one :project
end

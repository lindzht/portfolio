class AddThumbnailToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :thumbnail, :string
  end
end

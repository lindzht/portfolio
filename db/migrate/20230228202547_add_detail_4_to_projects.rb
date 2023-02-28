class AddDetail4ToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :images, :detail_4, :string
    add_column :images, :detail_5, :string
  end
end

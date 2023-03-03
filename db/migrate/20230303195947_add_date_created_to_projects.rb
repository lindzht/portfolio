class AddDateCreatedToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :date_created, :string
  end
end

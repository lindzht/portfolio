class AddDetail6ToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :images, :detail_6, :string
  end
end

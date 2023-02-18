class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :gh
      t.string :gh_front
      t.string :gh_back
      t.string :demo
      t.string :header

      t.timestamps
    end
  end
end

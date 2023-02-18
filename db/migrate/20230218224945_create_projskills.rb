class CreateProjskills < ActiveRecord::Migration[6.1]
  def change
    create_table :projskills do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.belongs_to :skill, null: false, foreign_key: true

      t.timestamps
    end
  end
end

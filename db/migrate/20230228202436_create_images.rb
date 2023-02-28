class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :hero
      t.string :detail_1
      t.string :detail_2
      t.string :detail_3
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end

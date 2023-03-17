class Project < ApplicationRecord
    has_many :projskills, dependent: :destroy
    has_many :skills, through: :projskills, dependent: :destroy
    has_many :descriptions, dependent: :destroy
    has_many :images, dependent: :destroy


    def self.sort_by_created
       self.order(created_at: :desc) 
    end

end

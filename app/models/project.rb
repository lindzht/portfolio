class Project < ApplicationRecord
    has_many :projskills
    has_many :skills, through: :projskills
    has_many :descriptions
    has_many :images


    def self.sort_by_created
       self.order(created_at: :desc) 
    end

end

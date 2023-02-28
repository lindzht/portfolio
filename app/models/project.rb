class Project < ApplicationRecord
    has_many :projskills
    has_many :skills, through: :projskills
    has_many :descriptions
    has_many :images


    def self.sort_name
       self.order(name: :asc) 
    end
end

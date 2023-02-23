class Project < ApplicationRecord
    has_many :projskills
    has_many :skills, through: :projskills
    has_many :descriptions
end

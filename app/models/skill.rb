class Skill < ApplicationRecord
    has_many :projskills
    has_many :projects, through: :projskills
end

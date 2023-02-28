# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "seeding..."


p1 = Project.create(name: "Req Board", gh: "https://github.com/lindzht/capstone-project", demo: "https://www.loom.com/share/ab2bd5cc6713480dbd11e5b99b474298", header: "Performance and requisition management tool for small scale Recruitment teams.")
p2 = Project.create(name: "Dough", gh: "https://github.com/lindzht/dough", demo: "https://www.loom.com/share/4dbc6b57d946492187da76a55ce6554c", header: "Personal expense management app.")
p3 = Project.create(name: "Yearbook", gh_front: "https://github.com/lindzht/front-end-yearbook", gh_back: "https://github.com/lindzht/phase-3-sinatra-react-project", demo: "https://www.loom.com/share/b6ceecfae80342d6a142faf6800cc73c", header: "Online “yearbook” for Flatiron School cohorts.")
p4 = Project.create(name: "LLocal's Guide", gh: "https://github.com/lindzht/phase2-project", demo: "https://www.loom.com/share/94fc8ecc233c4e8c8430781983e35816", header: "Local recommendations and reviews for NYC.")
p5 = Project.create(name: "Bored", gh: "https://github.com/hhw67865/ImBoredProject", demo: "https://www.loom.com/share/58f0610d3cd147b38917f98a6877dc74", header: "Activity generator, based on user selections in a game-like app.")
p6 = Project.create(name: "Portfolio",gh: "https://github.com/lindzht/portfolio", header: "Personal portfolio website.")

s1 = Skill.create(name: "React")
s2 = Skill.create(name: "Ruby on Rails")
s3 = Skill.create(name: "Sinatra")
s4 = Skill.create(name: "Active Record")
s5 = Skill.create(name: "React Router")
s6 = Skill.create(name: "HTML")
s7 = Skill.create(name: "CSS")
s8 = Skill.create(name: "RESTful Routing Conventions")
s9 = Skill.create(name: "API Communication")
s10 = Skill.create(name: "Semantic UI")
s11 = Skill.create(name: "Mobile Web Design")
s12 = Skill.create(name: "JavaScript")
s13 = Skill.create(name: "Ruby")
s14 = Skill.create(name: "PostgreSQL")
s15 = Skill.create(name: "SQLite")
s16 = Skill.create(name: "object oriented programming")
s17 = Skill.create(name: "MVC architecture")
s18 = Skill.create(name: "Flexbox")
s19 = Skill.create(name: "Mobile Design")
s20 = Skill.create(name: "Built DB.json")


# p1 skills 
Projskill.create(project_id: p1, skill_id: s1)
Projskill.create(project_id: p1, skill_id: s2)
Projskill.create(project_id: p1, skill_id: s4)
Projskill.create(project_id: p1, skill_id: s5)
Projskill.create(project_id: p1, skill_id: s7)
Projskill.create(project_id: p1, skill_id: s8)
Projskill.create(project_id: p1, skill_id: s9)
Projskill.create(project_id: p1, skill_id: s14)
Projskill.create(project_id: p1, skill_id: s18)

# p2 skills
Projskill.create(project_id: p2, skill_id: s1)
Projskill.create(project_id: p2, skill_id: s2)
Projskill.create(project_id: p2, skill_id: s4)
Projskill.create(project_id: p2, skill_id: s5)
Projskill.create(project_id: p2, skill_id: s7)
Projskill.create(project_id: p2, skill_id: s8)
Projskill.create(project_id: p2, skill_id: s9)
Projskill.create(project_id: p2, skill_id: s10)
Projskill.create(project_id: p2, skill_id: s14)
Projskill.create(project_id: p2, skill_id: s18)

# p3 skills
Projskill.create(project_id: p3, skill_id: s1)
Projskill.create(project_id: p3, skill_id: s2)
Projskill.create(project_id: p3, skill_id: s3)
Projskill.create(project_id: p3, skill_id: s4)
Projskill.create(project_id: p3, skill_id: s8)
Projskill.create(project_id: p3, skill_id: s7)
Projskill.create(project_id: p3, skill_id: s9)
Projskill.create(project_id: p3, skill_id: s18)

# p4 skills
Projskill.create(project_id: p4, skill_id: s1)
Projskill.create(project_id: p4, skill_id: s20)
Projskill.create(project_id: p4, skill_id: s7)
Projskill.create(project_id: p4, skill_id: s18)

# p5 skills
Projskill.create(project_id: p5, skill_id: s12)
Projskill.create(project_id: p5, skill_id: s9)
Projskill.create(project_id: p5, skill_id: s6)
Projskill.create(project_id: p5, skill_id: s7)
Projskill.create(project_id: p5, skill_id: s18)

#p6 skills
Projskill.create(project_id: p6, skill_id: s1)
Projskill.create(project_id: p6, skill_id: s2)
Projskill.create(project_id: p6, skill_id: s4)
Projskill.create(project_id: p6, skill_id: s5)
Projskill.create(project_id: p6, skill_id: s7)
Projskill.create(project_id: p6, skill_id: s8)
Projskill.create(project_id: p6, skill_id: s9)
Projskill.create(project_id: p6, skill_id: s14)
Projskill.create(project_id: p6, skill_id: s18)

puts "seeded baby!"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "seeding..."


p6 = Project.create(name: "Bored", gh: "https://github.com/hhw67865/ImBoredProject", demo: "https://www.loom.com/share/58f0610d3cd147b38917f98a6877dc74", header: "Activity generator, based on user selections in a game-like app.")
p5 = Project.create(name: "LLocal's Guide", gh: "https://github.com/lindzht/phase2-project", demo: "https://www.loom.com/share/94fc8ecc233c4e8c8430781983e35816", header: "Local recommendations and reviews for NYC.")
p4 = Project.create(name: "Yearbook", gh_front: "https://github.com/lindzht/front-end-yearbook", gh_back: "https://github.com/lindzht/phase-3-sinatra-react-project", demo: "https://www.loom.com/share/b6ceecfae80342d6a142faf6800cc73c", header: "Online “yearbook” for Flatiron School cohorts.")
p3 = Project.create(name: "Dough", gh: "https://github.com/lindzht/dough", demo: "https://www.loom.com/share/4dbc6b57d946492187da76a55ce6554c", header: "Personal expense management app.")
p2 = Project.create(name: "Req Board", gh: "https://github.com/lindzht/capstone-project", demo: "https://www.loom.com/share/ab2bd5cc6713480dbd11e5b99b474298", header: "Performance and requisition management tool for small scale Recruitment teams.", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691509223-8SI2XKAWQ3RDSCSUW874/Screen+Shot+2023-02-28+at+12.05.20+PM.png?format=2500w")
p1 = Project.create(name: "Portfolio",gh: "https://github.com/lindzht/portfolio", header: "Personal portfolio website.", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691764598-S6U38JHNUY9P2ACO8690/Screenshot+2023-03-01+at+12.29.12+PM.png?format=1500w")

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

#p1 skills
Projskill.create!(project_id: p1.id, skill_id: s1.id)
Projskill.create!(project_id: p1.id, skill_id: s2.id)
Projskill.create!(project_id: p1.id, skill_id: s4.id)
Projskill.create!(project_id: p1.id, skill_id: s5.id)
Projskill.create!(project_id: p1.id, skill_id: s7.id)
Projskill.create!(project_id: p1.id, skill_id: s8.id)
Projskill.create!(project_id: p1.id, skill_id: s9.id)
Projskill.create!(project_id: p1.id, skill_id: s14.id)
Projskill.create!(project_id: p1.id, skill_id: s18.id)

# p2 skills 
Projskill.create!(project_id: p2.id, skill_id: s1.id)
Projskill.create!(project_id: p2.id, skill_id: s2.id)
Projskill.create!(project_id: p2.id, skill_id: s4.id)
Projskill.create!(project_id: p2.id, skill_id: s5.id)
Projskill.create!(project_id: p2.id, skill_id: s7.id)
Projskill.create!(project_id: p2.id, skill_id: s8.id)
Projskill.create!(project_id: p2.id, skill_id: s9.id)
Projskill.create!(project_id: p2.id, skill_id: s14.id)
Projskill.create!(project_id: p2.id, skill_id: s18.id)

# p3 skills
Projskill.create!(project_id: p3.id, skill_id: s1.id)
Projskill.create!(project_id: p3.id, skill_id: s2.id)
Projskill.create!(project_id: p3.id, skill_id: s4.id)
Projskill.create!(project_id: p3.id, skill_id: s5.id)
Projskill.create!(project_id: p3.id, skill_id: s7.id)
Projskill.create!(project_id: p3.id, skill_id: s8.id)
Projskill.create!(project_id: p3.id, skill_id: s9.id)
Projskill.create!(project_id: p3.id, skill_id: s10.id)
Projskill.create!(project_id: p3.id, skill_id: s14.id)
Projskill.create!(project_id: p3.id, skill_id: s18.id)

# p4 skills
Projskill.create!(project_id: p4.id, skill_id: s1.id)
Projskill.create!(project_id: p4.id, skill_id: s2.id)
Projskill.create!(project_id: p4.id, skill_id: s3.id)
Projskill.create!(project_id: p4.id, skill_id: s4.id)
Projskill.create!(project_id: p4.id, skill_id: s8.id)
Projskill.create!(project_id: p4.id, skill_id: s7.id)
Projskill.create!(project_id: p4.id, skill_id: s9.id)
Projskill.create!(project_id: p4.id, skill_id: s18.id)

# p5 skills
Projskill.create!(project_id: p5.id, skill_id: s1.id)
Projskill.create!(project_id: p5.id, skill_id: s20.id)
Projskill.create!(project_id: p5.id, skill_id: s7.id)
Projskill.create!(project_id: p5.id, skill_id: s18.id)

# p6 skills
Projskill.create!(project_id: p6.id, skill_id: s12.id)
Projskill.create!(project_id: p6.id, skill_id: s9.id)
Projskill.create!(project_id: p6.id, skill_id: s6.id)
Projskill.create!(project_id: p6.id, skill_id: s7.id)
Projskill.create!(project_id: p6.id, skill_id: s18.id)

#p1 Images
Image.create(hero: "hhttps://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677693059969-VRRRUR9VJQC8QV5UDML3/Screenshot+2023-03-01+at+12.50.50+PM.png?format=2500w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691508068-MSGIGYWIJNSWXZ4RAE4V/Screen+Shot+2023-02-28+at+12.14.02+PM.png?format=2500w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691509377-3SFW6EDK5TI5XJ2IHP48/Screen+Shot+2023-02-28+at+12.21.25+PM.png?format=2500w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691510431-8BX7INNYGXY8VES3767X/Screen+Shot+2023-02-28+at+12.21.14+PM.png?format=2500w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691511520-PL75B886ROKI1LAQH9U3/Screen+Shot+2023-02-28+at+12.21.38+PM.png?format=2500w", project_id: p1.id)



puts "seeded baby!"
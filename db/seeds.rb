# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


################################# DESTROY CURRENT DB ##########################################

puts "destroying..."

Project.destroy_all

puts "destroyed all baby!"


puts "seeding..."

################################## SEED DB ###################################################

p6 = Project.create(name: "Bored", gh: "https://github.com/hhw67865/ImBoredProject", demo: "https://www.loom.com/embed/58f0610d3cd147b38917f98a6877dc74", header: "Activity generator, based on user selections in a game-like app.", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121948032-X0Z1Z2ID5TNE442KUDCY/Screen+Shot+2023-03-06+at+11.58.58+AM.png?format=1500w", date_created: "Oct 2022")
p5 = Project.create(name: "LLocal's Guide", gh: "https://github.com/lindzht/phase2-project", demo: "https://www.loom.com/embed/94fc8ecc233c4e8c8430781983e35816", header: "User submitted recommendations and reviews for NYC restaurants, bars, music venues, and art spaces.", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121156109-HXV8CJ81GJ47XR71Q9YI/Screen+Shot+2023-03-06+at+11.42.00+AM.png?format=2500w", date_created: "Nov 2022")
p4 = Project.create(name: "Yearbook", gh_front: "https://github.com/lindzht/front-end-yearbook", gh_back: "https://github.com/lindzht/phase-3-sinatra-react-project", demo: "https://www.loom.com/embed/b6ceecfae80342d6a142faf6800cc73c", header: "Online “yearbook” for Flatiron School cohorts.", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678120026849-KZNS2US2ZDI7ZPHWX97E/Screen+Shot+2023-03-06+at+11.26.47+AM.png?format=2500w", date_created: "Dec 2022")
p3 = Project.create(name: "Dough", gh: "https://github.com/lindzht/dough", demo: "https://www.loom.com/embed/4dbc6b57d946492187da76a55ce6554c", header: "Personal monthly expense management app.", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677705320607-CI47O5OHRWPOGSOI3O74/Screen+Shot+2023-02-28+at+2.57.22+PM.png?format=2500w", date_created: "Jan 2023")
p2 = Project.create(name: "Req Board", gh: "https://github.com/lindzht/capstone-project", demo: "https://www.loom.com/embed/ab2bd5cc6713480dbd11e5b99b474298", header: "Performance and requisition management tool for small scale Recruitment teams to better organize ongoing hiring efforts.", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691509223-8SI2XKAWQ3RDSCSUW874/Screen+Shot+2023-02-28+at+12.05.20+PM.png?format=2500w", date_created: "Jan 2023")
p1 = Project.create(name: "Portfolio",gh: "https://github.com/lindzht/portfolio", header: "This website! :) ", thumbnail: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677694323104-ATOOST6S16YBLYQ27O0S/Screenshot+2023-03-01+at+1.11.14+PM.png?format=1500w", date_created: "March 2023")




s1 = Skill.create(name: "React")
s2 = Skill.create(name: "Ruby on Rails")
s3 = Skill.create(name: "Sinatra")
s4 = Skill.create(name: "Active Record")
s5 = Skill.create(name: "React Router")
s6 = Skill.create(name: "HTML")
s7 = Skill.create(name: "CSS")
s8 = Skill.create(name: "RESTful Routing Conventions")
s9 = Skill.create(name: "API")
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
s21 = Skill.create(name: "User authentication & authorization")
s22 = Skill.create(name: "Admin access")
s23 = Skill.create(name: "BCrypt Gem")
s24 = Skill.create(name: "Typography")
s25 = Skill.create(name: "Graphic Design")

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
Projskill.create!(project_id: p1.id, skill_id: s24.id)
Projskill.create!(project_id: p1.id, skill_id: s25.id)

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
Projskill.create!(project_id: p2.id, skill_id: s21.id)
Projskill.create!(project_id: p2.id, skill_id: s22.id)
Projskill.create!(project_id: p2.id, skill_id: s23.id)


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
Image.create(hero: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007088048-CRD4M1SNTK1UJEZF3971/Screenshot+2023-03-16+at+6.47.00+PM.png?format=2500w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007088052-NXYZEME0EG4K548XR7BC/Screenshot+2023-03-16+at+6.47.18+PM.png?format=1000w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007087239-N7PB65V5VP1ZUZHD7Q1J/Screenshot+2023-03-16+at+6.47.36+PM.png?format=1000w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007087144-KMBOXL3UZW979ESZNK1V/Screenshot+2023-03-16+at+6.47.51+PM.png?format=1000w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007086338-CT3ENPP5YVKJPV9WRNK3/Screenshot+2023-03-16+at+6.48.43+PM.png?format=500w", detail_5: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007085564-2WQ83FKL2XNMBR2FZUIE/Screenshot+2023-03-16+at+6.50.13+PM.png?format=500w", detail_6: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007086404-YO5MTA89UBUZFW4WWLVG/Screenshot+2023-03-16+at+6.48.13+PM.png?format=500w", project_id: p1.id)

#p2 Images
Image.create(hero: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677693059969-VRRRUR9VJQC8QV5UDML3/Screenshot+2023-03-01+at+12.50.50+PM.png?format=2500w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691508068-MSGIGYWIJNSWXZ4RAE4V/Screen+Shot+2023-02-28+at+12.14.02+PM.png?format=2500w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691509377-3SFW6EDK5TI5XJ2IHP48/Screen+Shot+2023-02-28+at+12.21.25+PM.png?format=2500w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691510431-8BX7INNYGXY8VES3767X/Screen+Shot+2023-02-28+at+12.21.14+PM.png?format=2500w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677691511520-PL75B886ROKI1LAQH9U3/Screen+Shot+2023-02-28+at+12.21.38+PM.png?format=2500w", project_id: p2.id)

#p3 Images
Image.create(hero: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677705320909-HEF195W2OI1OSY6YE8EB/Screen+Shot+2023-02-28+at+2.57.49+PM.png?format=1000w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677705319950-52OVY2X4BHIW89T87JLW/Screen+Shot+2023-02-28+at+3.03.59+PM.png?format=1500w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677705321322-Q6XCSL6RLAXG8F53J198/Screen+Shot+2023-02-28+at+2.59.18+PM.png?format=1000w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677705319028-A9FHPCOX90YAU2RVWHFL/Screen+Shot+2023-02-28+at+3.00.51+PM.png?format=1500w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677705319128-KJHYIZ6UAA9ZMI13GPXL/Screen+Shot+2023-02-28+at+3.01.02+PM.png?format=1500w", detail_5: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1677705319917-11NIK2HO63Z3MTQILEJH/Screen+Shot+2023-02-28+at+3.03.36+PM.png?format=1500w", project_id: p3.id )

#p4 Images
Image.create(hero: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678120750698-ASW38FOVI53E1Q2HEGQP/Screen+Shot+2023-03-06+at+11.30.09+AM.png?format=1000w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678120752391-WVMPZRT4N02AVNGO92LU/Screen+Shot+2023-03-06+at+11.38.12+AM.png?format=1000w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678120751633-UZOFO0QZ1S38MNWULBVI/Screen+Shot+2023-03-06+at+11.38.36+AM.png?format=1500w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678120750388-NLY2M6R1J73GX0T0CMC3/Screen+Shot+2023-03-06+at+11.38.50+AM.png?format=750w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678120752862-XK0T5IYX28LJTZ98DKNP/Screen+Shot+2023-03-06+at+11.33.21+AM.png?format=1500w", project_id: p4.id)

#p5 Images
Image.create(hero: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121133502-WWZ7H93DIT6RCQVN8LLS/Screen+Shot+2023-03-06+at+11.45.21+AM.png?format=1000w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121159240-AAMSVR7ZN4VNK47K2WPA/Screen+Shot+2023-03-06+at+11.43.51+AM.png?format=1000w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121157744-F3D9OQU39X2FAJ30WHY2/Screen+Shot+2023-03-06+at+11.44.20+AM.png?format=1000w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121159467-MO1O6VRCZKIDV02BXVIU/Screen+Shot+2023-03-06+at+11.44.30+AM.png?format=1500w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121160151-J19MWEPFSM9PRL12SAXI/Screen+Shot+2023-03-06+at+11.44.41+AM.png?format=1500w", detail_5: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121160288-JB0Y4EPAVTHQVFUOJW3W/Screen+Shot+2023-03-06+at+11.44.49+AM.png?format=1500w", project_id: p5.id)

#p6 Images
Image.create(hero: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121907113-QHT71MA8L5BZ4G3JOKUG/Screen+Shot+2023-03-06+at+11.56.18+AM.png?format=1500w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121909375-YVN9FL2E4R4Y52XWUB7G/Screen+Shot+2023-03-06+at+11.57.49+AM.png?format=1000w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121908138-1F1EG8PWUE7ZQ8CY1OPF/Screen+Shot+2023-03-06+at+11.56.52+AM.png?format=1000w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121908666-ZVKUMO246HHEGY6SORQU/Screen+Shot+2023-03-06+at+11.57.06+AM.png?format=1000w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1678121908868-41SAKASQ38N9CBU44U1F/Screen+Shot+2023-03-06+at+11.57.31+AM.png?format=1000w", project_id: p6.id)


##################### UPDATES #########################


#3.16.23:
# Project.last.update(header: "This website! :) ")
# Image.create(hero: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007088048-CRD4M1SNTK1UJEZF3971/Screenshot+2023-03-16+at+6.47.00+PM.png?format=2500w", detail_1: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007088052-NXYZEME0EG4K548XR7BC/Screenshot+2023-03-16+at+6.47.18+PM.png?format=1000w", detail_2: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007087239-N7PB65V5VP1ZUZHD7Q1J/Screenshot+2023-03-16+at+6.47.36+PM.png?format=1000w", detail_3: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007087144-KMBOXL3UZW979ESZNK1V/Screenshot+2023-03-16+at+6.47.51+PM.png?format=1000w", detail_4: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007086338-CT3ENPP5YVKJPV9WRNK3/Screenshot+2023-03-16+at+6.48.43+PM.png?format=500w", detail_5: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007085564-2WQ83FKL2XNMBR2FZUIE/Screenshot+2023-03-16+at+6.50.13+PM.png?format=500w", detail_6: "https://images.squarespace-cdn.com/content/v1/52001f7ce4b0929e453b7ea1/1679007086404-YO5MTA89UBUZFW4WWLVG/Screenshot+2023-03-16+at+6.48.13+PM.png?format=500w", project_id: Project.last.id)



puts "seeded baby!"
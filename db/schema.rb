# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_28_202659) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "category_name"
    t.string "cat_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "descriptions", force: :cascade do |t|
    t.string "text"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_descriptions_on_project_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.string "item"
    t.float "cost"
    t.string "date_of_expense"
    t.bigint "user_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_expenses_on_category_id"
    t.index ["user_id"], name: "index_expenses_on_user_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "hero"
    t.string "detail_1"
    t.string "detail_2"
    t.string "detail_3"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "detail_4"
    t.string "detail_5"
    t.string "detail_6"
    t.index ["project_id"], name: "index_images_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "gh"
    t.string "gh_front"
    t.string "gh_back"
    t.string "demo"
    t.string "header"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "thumbnail"
  end

  create_table "projskills", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "skill_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_projskills_on_project_id"
    t.index ["skill_id"], name: "index_projskills_on_skill_id"
  end

  create_table "recruiters", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin"
    t.bigint "company_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_recruiters_on_company_id"
  end

  create_table "recruiterteams", force: :cascade do |t|
    t.bigint "recruiter_id", null: false
    t.bigint "team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recruiter_id"], name: "index_recruiterteams_on_recruiter_id"
    t.index ["team_id"], name: "index_recruiterteams_on_team_id"
  end

  create_table "reqs", force: :cascade do |t|
    t.string "req_id"
    t.string "name"
    t.string "org"
    t.string "hiring_manager"
    t.date "open_date"
    t.date "hire_goal"
    t.string "hired_status"
    t.date "hired_date"
    t.string "candidate"
    t.date "candidate_app"
    t.bigint "recruiter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "company_id", null: false
    t.index ["company_id"], name: "index_reqs_on_company_id"
    t.index ["recruiter_id"], name: "index_reqs_on_recruiter_id"
  end

  create_table "reqteams", force: :cascade do |t|
    t.bigint "req_id", null: false
    t.bigint "team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["req_id"], name: "index_reqteams_on_req_id"
    t.index ["team_id"], name: "index_reqteams_on_team_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.bigint "company_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_teams_on_company_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "password_digest"
    t.float "income"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "descriptions", "projects"
  add_foreign_key "expenses", "categories"
  add_foreign_key "expenses", "users"
  add_foreign_key "images", "projects"
  add_foreign_key "projskills", "projects"
  add_foreign_key "projskills", "skills"
  add_foreign_key "recruiters", "companies"
  add_foreign_key "recruiterteams", "recruiters"
  add_foreign_key "recruiterteams", "teams"
  add_foreign_key "reqs", "companies"
  add_foreign_key "reqs", "recruiters"
  add_foreign_key "reqteams", "reqs"
  add_foreign_key "reqteams", "teams"
  add_foreign_key "teams", "companies"
end

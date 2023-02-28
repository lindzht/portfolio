class SkillsController < ApplicationController

    def index
        render json: Skill.all, status: :ok
    end
end

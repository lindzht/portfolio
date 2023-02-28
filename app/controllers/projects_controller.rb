class ProjectsController < ApplicationController


    def index
        render json: Project.sort_by_created, status: :ok
    end

end

class ProjectsController < ApplicationController


    def index
        render json: Project.sort_by_created, status: :ok
    end

    def show
        project = find_project
        render json: project, status: :ok
    end

    private

    def find_project
        Project.find(params[:id])
    end

end

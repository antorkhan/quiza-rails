class Admin::CoursesController < ApplicationController
  before_action :authorize_request

  def update
    @course = Course.find(params[:courseID])
    if @course && @course.update(name: params[:name], description: params[:description])
      render json: {course: @course, message: '' }
    else

    end

  end
end

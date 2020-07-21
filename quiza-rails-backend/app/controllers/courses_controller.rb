class CoursesController < ApplicationController
  def index
    @courses = Course.all
    render json: { courses: @courses}
  end

  def show
    @course = Course.find(params[:id])
    render json: {course:@course, lessons: @course.lessons}
  end
end

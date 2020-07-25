class Admin::CoursesController < ApplicationController
  before_action :authorize_request

  def index
    @courses = Course.all
    render json: {courses: @courses}
  end

  def show
    @course = Course.find(params[:id])
    render json: {course: @course, lessons: @course.lessons}
  end

  def create
    @course = Course.new(name: params[:name], description: params[:description])
    if @course.save
      render json: {course: @course, message: 'Created Successfully'}
    else
      render json: {course: nil, message: 'Course Not Found'}
    end
  end

  def update
    @course = Course.find(params[:id])
    if @course && @course.update(name: params[:name], description: params[:description])
      render json: {course: @course, message: 'Updated Successfully'}
    else
      render json: {course: nil, message: 'Course Not Found'}
    end
  end

  def destroy
    @course = Course.find(params[:id])
    if @course && @course.destroy
      render json: {message: 'Course Deleted Successfully'}
    else
      render json: {message: 'Course Not Found'}
    end
  end
end
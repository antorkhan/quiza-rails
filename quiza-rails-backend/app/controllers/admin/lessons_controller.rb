class Admin::LessonsController < ApplicationController
  before_action :set_course

  def create
    @lesson = @course.lessons.new(name: params[:name], description: params[:description])
    if @lesson.save!
      render json: { lesson: @lesson, message: 'Lesson created successfully'}
    else
      render json: {lesson: nil, message: 'Something Went Wrong'}
    end
  end
  def show
    lesson = @course.lessons.find(params[:id])
    render json: {lesson: lesson, questions: lesson.questions}
  end

  def update
    @lesson = @course&.lessons&.find(params[:id])
    if @lesson && @lesson.update(name: params[:name], description: params[:description])
      render json: {lesson: @lesson, message: 'Lesson Updated Successfully' }
    else
      render json: {lesson: nil, message: 'Something Went Wrong' }
    end
  end

  def destroy
    @lesson = @course&.lessons&.find(params[:id])

    if @lesson && @lesson.destroy
      render json: {message: 'Lesson Deleted Successfully'}
    else
      render json: {message: 'Course Not Found'}
    end
  end

  private
  def set_course
    @course = Course.find(params[:course_id])
  end
end

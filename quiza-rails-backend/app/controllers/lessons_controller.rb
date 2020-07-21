class LessonsController < ApplicationController
  before_action :set_course
  def index
    lessons = @course.lessons.all
    render json: { lessons: lessons}
  end

  def show
    lesson = @course.lessons.find(params[:id])
    render json: {lesson: lesson, questions: lesson.questions}
  end

  def update
  end

  def delete
  end

  private
  def set_course
    @course = Course.find(params[:course_id])
  end
end

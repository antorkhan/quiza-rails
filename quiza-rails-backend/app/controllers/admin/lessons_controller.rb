class Admin::LessonsController < ApplicationController
  def update
    @lesson = Course.find(params[:course_id])&.lessons&.find(params[:id])
    if @lesson && @lesson.update(name: params[:name], description: params[:description])
      render json: {lesson: @lesson, message: 'Lesson Updated Successfully' }
    else
      render json: {lesson: nil, message: 'Something Went Wrong' }
    end

  end
end

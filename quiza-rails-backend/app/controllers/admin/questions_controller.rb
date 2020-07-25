class Admin::QuestionsController < ApplicationController
  before_action :set_course_and_lesson

  def create
    question = @lesson&.questions&.new(text: params[:text],
                                        option_1: params[:option_1],
                                        option_2: params[:option_2],
                                        option_3: params[:option_3],
                                        option_4: params[:option_4],
                                        correct_option: params[:correct_option])
    if question&.save
      render json: {question: question, message: 'Question Created Successfully' }
    else
      render json: {question: nil, message: 'Something Went Wrong' }
    end
  end

  def show
    question = @lesson.questions.find(params[:id])
    render json: {question: question}
  end



  def update
    question = @lesson.questions.find(params[:id])
    if question && question.update(text: params[:text],
                                   option_1: params[:option_1],
                                   option_2: params[:option_2],
                                   option_3: params[:option_3],
                                   option_4: params[:option_4],
                                   correct_option: params[:correct_option])
      render json: {question: question, message: 'Question Updated Successfully' }
    else
      render json: {question: nil, message: 'Something Went Wrong' }
    end
  end

  def destroy
    question = @lesson&.questions&.find(params[:id])

    if question&.destroy
      render json: {message: 'Question Deleted Successfully'}
    else
      render json: {message: 'Question Not Found'}
    end
  end

  private
  def set_course_and_lesson
    @course = Course.find(params[:course_id])
    @lesson = @course&.lessons&.find(params[:lesson_id])
  end
end

class QuestionsController < ApplicationController
  def evaluate
    questions = Course.find(params[:courseID]).lessons.find(params[:lessonID]).questions
    score = 0
    params[:answers].each do |key, value|
      question = questions.find(key.to_i)
      if question.correct_option == value.to_i
        score += 1
      end
    end
    render json: { score: score }

  end
end

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    puts '***************************'
    puts header
    puts '***************************'
    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = SysUser.find(@decoded[:sys_user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    end
    rescue JWT::DecodeError => e
      render json: { errors: e.message, message: 'Invalid Token' }, status: :unauthorized
  end
end

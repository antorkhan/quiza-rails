class ApplicationController < ActionController::Base

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = SysUser.find(@decoded[:sys_user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    end
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
  end
end

class Admin::AuthenticationsController < ApplicationController
  before_action :authorize_request, except: :login
  def login
    @sys_user = SysUser.find_by_username(params[:username])
    if @sys_user&.authenticate(params[:password])
      puts '************************'
      p @sys_user
      puts '************************'

      token = JsonWebToken.encode(sys_user_id: @sys_user.id)
      time =  24.hours.from_now
      render json: { token: token,
                     exp: time.strftime("%m-%d-%Y %H:%M"),
                     username: @sys_user.username }, status: :ok

    else
      render json: {error: 'unauthorized'}, status: :unauthorized
    end
  end
end

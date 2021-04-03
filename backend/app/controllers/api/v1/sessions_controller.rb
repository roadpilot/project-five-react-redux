class Api::V1::SessionsController < ApplicationController

  def create
      @user = User.find_by(username: params[:session][:username])
      if @user && @user.authenticate(params[:session][:password])
          session[:user_id] = @user.id
          render json: UserSerializer.new(@user), status: :ok
          # render json: @user
      else
          render json: {
              error: "Invalid username or password.  Please try again."
          }
      end
  end

  def current_user
      @user = User.find_by(id: session[:user_id])
      if @user
        render json: UserSerializer.new(@user), status: :ok
      else
        render json: {
            error: "You must be logged in."
        }
      end
  end

  def destroy
    session.clear
    render json: {
      notice: "Logged out!"
    }, status: :ok
  end

end

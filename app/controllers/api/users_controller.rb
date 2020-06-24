class Api::UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)   
        if @user.save
           login(@user)
           render :show  
        else
           render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: ["Unable to find user"], status: 404 
        end
    end
end

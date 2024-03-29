class Api::SessionsController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
            render :show
        else
            render json: ["Invalid Username or Password"], status: 422 
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}
        else
            render json: ["Not logged in!"], status: 404 
        end
    end
end

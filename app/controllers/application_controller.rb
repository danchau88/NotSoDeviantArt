class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def require_login
        redirect_to new_api_session_url if !logged_in?
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        @current_user = nil 
        session[:session_token] = nil if logged_in?
    end

    def logged_in?
        !!current_user
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :DOB)
    end
end

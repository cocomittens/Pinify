class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.session_token
    end

    def logout!()
        @current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

       config.after_initialize do |app|
      app.routes.append{ match '*a', :to => 'application#render_404' } unless config.consider_all_requests_local
    end


end

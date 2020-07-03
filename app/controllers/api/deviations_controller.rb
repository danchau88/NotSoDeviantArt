class Api::DeviationsController < ApplicationController
    def index
        if params[:search]  
            @deviations = Deviation.where('title ilike ?', "%#{params[:search]}%")
        else
            @deviations = Deviation.all
        end

        render :index
    end
    
    def show
        @deviation = Deviation.find(params[:id])
        @comments = @deviation.comments.includes(:author) # like the associations chaining 
        render :show
    end

    def create
        @deviation = Deviation.create(deviation_params)
        if @deviation.save
            render :show
        else
            render json: @deviation.errors.full_messages, status: 422
        end
    end

    def update
        @deviation = Deviation.find(params[:id])
        if @deviation.update(deviation_params)
            render :show
        else
            render json: @deviation.errors.full_messages, status: 422
        end
    end

    def destroy
        @deviation = Deviation.find(params[:id])
        if @deviation.destroy
            render :index
        else
            render json: ["You can't destroy something that doesn't exist."]
        end
    end
    
    private
    def deviation_params
        params.require(:deviation).permit(:title, :description, :artist_id)
    end
end

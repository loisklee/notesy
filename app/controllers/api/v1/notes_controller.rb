module Api::V1
  class NotesController < ApplicationController
    def index
      @notes = Note.order("created_at DESC")
      render json: @notes
    end

    def create
      @note = Note.create(note_params)
      render json: @note
    end
        
    private
    
      def note_params
        params.require(:note).permit(:title, :body)
      end
  end
end
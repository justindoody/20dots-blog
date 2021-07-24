class PostTitlesController < ApplicationController
  before_action :confirm_admin

  def update
    post = Post.find(params[:id])

    # TODO: Move to callback
    post.slug = nil

    post.update(params.require(:post).permit(:title))

    render json: {}, status: :ok
  end

end
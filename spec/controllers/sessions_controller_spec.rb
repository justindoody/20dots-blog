 require 'rails_helper'

describe SessionsController, type: :controller do
  describe "GET new" do
    it "has a 200 status code" do
      get :new
      expect(response.status).to eq(200)
    end
  end

end
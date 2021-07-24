require 'rails_helper'

RSpec.describe 'admin processes', type: :system do
  def login_as_admin(password: 'password')
    visit '/admin'
    fill_in 'Password', with: password
    click_button 'Log In'
  end

  context 'log in with wrong password' do
    it 'fails to log in' do
      create(:admin)
      login_as_admin(password: 'wrongpass')
      expect(page).to have_content 'Wrong password'
    end
  end

  context 'log in with good password' do
    it 'successfully logs in and creates post' do
      create(:admin)
      login_as_admin
      expect(page).to have_content 'logout'

      post_count = Post.count
      click_link 'new post'
      expect(page).to have_content 'A New Post'
      expect(Post.count).to eq post_count + 1
    end
  end
end
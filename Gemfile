source 'https://rubygems.org'

gem 'rails', '~> 7.0.0'
gem 'pg', '~> 1.2'
gem 'puma', '~> 5.6'

### Assets
gem 'jsbundling-rails'
gem 'cssbundling-rails'
gem 'sprockets', '~> 4.0'
gem 'haml', '~> 5.2'
gem 'bootsnap', require: false
gem 'stimulus-rails'
gem 'sprockets-rails'

### General
gem 'friendly_id'
gem 'bcrypt', '~> 3.1.7'
gem 'builder' # RSS Feed
gem 'carrierwave', '~> 2.0' # Image upload
gem 'remotipart', '~> 1.4' # Allows async upload of files aka "multipart"
gem 'mini_magick' # Image manipulation interface with ImageMagick
gem 'lograge', '~> 0.11'

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development, :test do
  gem 'pry-rails', '~> 0.3'
  gem 'rspec-rails', '~> 5.0'
  gem 'factory_bot_rails', '~> 6.0'
  gem 'rails_best_practices'
end

group :test do
  gem 'rails-controller-testing'
  gem 'capybara', '~> 3.2'
  gem 'guard-rspec', '~> 4.7', require: false
  gem 'ffaker', '~> 2.17'
  gem 'timecop', '~> 0.9'
  gem 'selenium-webdriver'
  gem 'simplecov', require: false
end

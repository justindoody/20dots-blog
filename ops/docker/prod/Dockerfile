FROM ruby:3.0.2-alpine3.13

ARG APP_PATH=/code

RUN apk add --update --no-cache \
        build-base \
        bash \
        curl \
        tzdata \
        nodejs \
        yarn \
        postgresql-dev \
        imagemagick && \
      gem update bundler && \
      mkdir $APP_PATH

COPY ./ops/docker/prod/entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

WORKDIR $APP_PATH

ENV RAILS_ENV=production
ENV NODE_ENV=production
ENV BUNDLE_WITHOUT=development:test

COPY Gemfile* $APP_PATH/

RUN bundle install --jobs 4

COPY package.json yarn.lock $APP_PATH/

RUN yarn install

COPY . $APP_PATH/

RUN --mount=type=secret,id=RAILS_MASTER_KEY,dst=/code/config/credentials/production.key \
    bundle exec rake assets:precompile

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
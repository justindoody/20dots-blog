FROM ruby:2.7.2-alpine3.13

ARG APP_PATH=/code
ENV CHROMEDRIVER_PATH=/usr/bin/chromedriver

RUN apk add --update --no-cache \
        bash \
        nano \
        build-base \
        nodejs \
        yarn \
        sqlite-dev \
        tzdata \
        imagemagick \
        postgresql-dev \
        postgresql-client \
        chromium-chromedriver \
        chromium \
        python3 \
        python3-dev \
        py3-pip && \
      gem update bundler && \
      mkdir $APP_PATH

COPY ./ops/docker/dev/entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

WORKDIR $APP_PATH

COPY Gemfile* $APP_PATH/

RUN bundle install --jobs 4

COPY package.json yarn.lock $APP_PATH/

RUN apk --no-cache --virtual build-dependencies add \
    python2 \
    && yarn install \
    && apk del build-dependencies

COPY . $APP_PATH/

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
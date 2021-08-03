.PHONY: up bash bash_standalone restart migrate help

IMAGE ?= 20dots_web
SERVICE ?= 20dots-web

default: help

up: #: Spin up compose containers
	docker compose --file ./ops/docker/dev/docker-compose.yml \
                 --project-name 20dots \
                 --project-directory ./ \
                 up \
                 --build

webpack_dev_server: #: Run webpack dev server
	docker exec \
				 --interactive \
				 --tty \
				 $(SERVICE)-1 entrypoint.sh ./bin/webpack-dev-server

bash: #: Bash prompt on running web container
	docker exec \
				 --interactive \
				 --tty \
				 $(SERVICE)-1 entrypoint.sh bash

bash_standalone: #: Bash prompt in new container
	docker run \
				 --volume blog-sync:/code2 \
				 --interactive \
				 --tty \
				  $(IMAGE):latest entrypoint.sh bash

restart: #: Restart rails server on running web container
	docker exec $(SERVICE)-1 touch tmp/restart.txt

migrate: #: Run rails migrations
	docker exec $(SERVICE)-1 entrypoint.sh rails db:migrate

help: #: Show help topics
	@grep "#:" Makefile* | grep -v "@grep" | sort | sed "s/\([A-Za-z_ -]*\):.*#\(.*\)/$$(tput setaf 3)\1$$(tput sgr0)\2/g"

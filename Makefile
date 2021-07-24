.PHONY: up bash bash_standalone restart migrate help

SERVICE ?= 20dots_web

default: help

up: #: Spin up compose containers
	docker compose --file ./ops/docker/dev/docker-compose.yml \
                 --project-name 20dots \
                 --project-directory ./ \
                 up \
                 --build

bash: #: Bash prompt on running web container
	docker exec \
				 --interactive \
				 --tty \
				 $(SERVICE)_1 entrypoint.sh bash

bash_standalone: #: Bash prompt in new container
	docker run \
				 --volume $(shell pwd):/code:delegated \
				 --interactive \
				 --tty \
				  $(SERVICE):latest entrypoint.sh bash

restart: #: Restart rails server on running web container
	docker exec $(SERVICE)_1 touch tmp/restart.txt

migrate: #: Run rails migrations
	docker exec $(SERVICE)_1 entrypoint.sh rails db:migrate

help: #: Show help topics
	@grep "#:" Makefile* | grep -v "@grep" | sort | sed "s/\([A-Za-z_ -]*\):.*#\(.*\)/$$(tput setaf 3)\1$$(tput sgr0)\2/g"

.PHONY: up bash bash_standalone restart migrate help

ANSIBLE_USER ?= vita

default: help

install_requirements: #: Install ansible dependencies
	ansible-galaxy install -r requirements.yml

test_connection: #: Ping the ansible managed servers
	ansible all --inventory-file=./hosts \
							-u $(ANSIBLE_USER) \
							-m ping

run_initial_setup: #: Basic server configuration
	ansible-playbook initial-playbook.yml \
									 --inventory-file=./hosts \
									 -u root

run_docker_setup: #: Setup docker for docker swarm
	ansible-playbook docker-playbook.yml \
									 --inventory-file=./hosts \
									 -u $(ANSIBLE_USER)

help: #: Show help topics
	@grep "#:" Makefile* | grep -v "@grep" | sort | sed "s/\([A-Za-z_ -]*\):.*#\(.*\)/$$(tput setaf 3)\1$$(tput sgr0)\2/g"

## Setup

You need to add `./vars/secrets.yml` with any needed secrets:
```yml
---
docker_secrets: [{ name: "", value: "" }, { name: "", value: "" }]
```

You need to add `./hosts` with:
```sh
[swarmservers]
server-1 ansible_host=XXX.XXX.XXX.XXX vpc_ip=XX.XXX.X.X
server-2 ansible_host=XXX.XXX.XXX.XXX vpc_ip=XX.XXX.X.X

[swarmservers:vars]
ansible_ssh_private_key_file=~/.ssh/<private_key>

[swarm_managers]
server-1

[swarm_workers]
server-2
```

## Running

Running from within the `./ops/ansible` path see `make help` for various commands to run.

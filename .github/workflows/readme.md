## Tests

### Environemnt Variables

`RAILS_MASTER_KEY_TEST` needs to be set to the test key as a repository secret.

## Build and Deploy

### Deployment

#### Deployment SSH Key

Generate an RSA key in PEM format `ssh-keygen -t rsa -f ~/.ssh/20dots_deploy -m pem` with no password. The github deploy workflow depends on `DOCKER_SSH_PRIVATE_KEY` being set as a repository secret. Set this to the private key: `20dots_deploy`'s value.'

### Other Environment Variables

`RAILS_MASTER_KEY` needes to be set to the production key as a dependency to precompile production assets.
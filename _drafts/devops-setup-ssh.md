if you are setting up a server that needs to pull from a git repo. It needs
the secret key. ssh-agent doesn't run automatically unless you set it up.

add the following to .bashrc

eval `ssh-agent`
ssh-add ~/.ssh/<secret key>.pub

this will configure root to use the correct secret on every login

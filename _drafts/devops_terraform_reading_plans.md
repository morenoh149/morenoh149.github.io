`terraform plan` will print out the architecture based off the local files,
if you make changes this command will show you the newly proposed archicture
and highlight the differences.

* you can see what is provoking new resources when a line ends in `(forces new
resource)`, this can be a change in user_data or a change in the base ami image
for example.

`terraform state pull | less` will show you the state

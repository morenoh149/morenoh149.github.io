
specify a docker image via a Dockerfile

build the image

run the image

debug the image
`docker logs <your image name>` will display the logs collected by docker

if your docker images keeps shutting down before you can read logs from it try
`docker run --rm -it --entrypoint='sh' <your image name>` which will open a shell

if you instead would like to change something inside the container (as rebuilding
images may take a long time) do
`docker exec -it 1d8bf87ba7d4 /bin/bash` which will open a shell in a currently running image

docker images try to be as bare bones as possible,
to read a file you can use `more <filename>`

if you want to iterate faster you can install vim while developing your image
so you can exec into the running contianer to change it without rebuilding, then
remove vim when publishing your dockerfile

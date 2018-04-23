To upgrade jenkins

replace the .war file
or if you installed it via the debian package manager run
```
apt-get update
apt-get install jenkins
```
on the master node.

to verify jenkins was installed via apt do
```
apt list | grep jenkins
```

if you use ansible or terraform you may be able to increment the version
in the declarative file and apply the change 

* Backup your JENKINS_HOME directory.
* Download your desired Jenkins update.
* Stop the old version.
* Run the new version using the existing JENKINS_HOME.

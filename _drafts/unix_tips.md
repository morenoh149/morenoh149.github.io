tips for doing things in unix. Cover different scenarios. Basically any time you wondered how to do something
and went to google/stackoverflow to figure things out.

1) you're in a shell. You're not sure what you can do or who you are. How do we orient ourselves?

whoami - prints effective userid
uname -a - prints all system info, take notice of the architecture, this will tell you if you can run 64-bit programs
  or if you should install 32-bit ones
pwd - print working directory, prints the full path of the directory you are currently in
echo $PATH - prints all directories in your path, after running this you can run ls on every directory listed to
  see all commands that are available to you
apropos - searches the whatis db for a string (search files)
ps -p $$ - will print what shell you are currently running 
scp somefile.txt username@somehost.net:~ - copy a local file to your box


ctrl-u clears a line
ctrl-l clears the whole screen


If you ever have to force an application to stop but can't find it using top.
ps gives you the processes running on your machine.

so `ps | grep weechat` will give you all processes mentioning weechat. Then you can do `kill <pid>` to stop the process.

Found a cool utility by mistake `rs` reshapes an array passed in.

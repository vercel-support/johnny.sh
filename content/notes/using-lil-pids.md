# Using Lil Pids
Sometimes, you need a really simple process manager. Like, very simple. [lil pids](https://github.com/mafintosh/lil-pids) is just that. It’s dead simple.

I have actually used this on a few projects for managing nodeJS services with no problems. Simple is solid.

1. install that shit `npm install -g lil-pids`
2. create two files, `./services` & `./pids`
3. install this add-to-systemd package `npm install -g add-to-systemd`
4. run this weird ass command `sudo $(which add-to-systemd) -u $(whoami) -e PATH=$PATH lil-pids $(which lil-pids) ./services ./pids`
5. make sure it’s all running and shit when the server restarts, but also for some reason need this to make it properly persist as background process `sudo systemctl start lil-pids`
6. Lastly, run lil-pids `lil-pids ./services ./pids`
7. That’s it. You can run `cat .pids` to see what is running.
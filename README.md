# About

A set of scripts from the Fido project to keep your Fido device up to date.

# Installation

```
cd /root/;
git clone https://github.com/rjsteinert/Fido-Updater.git;
cd Fido-Updater;
cp util/cron.d/fido-updater /etc/cron.d/;
cp util/init.d/fido-updater /etc/init.d/;
update-rc.d fido-updater default;
cp util/config.default.json ./config.json;
```

# Credits 
Originally forked from http://github.com/apitronics/Hive-Updater

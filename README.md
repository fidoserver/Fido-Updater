# About

A set of scripts from the Fido project to keep your Fido device up to date.

# Installation

```
cd /root/;
git clone https://github.com/rjsteinert/Fido-Updater.git;
cd Fido-Updater;
cp utils/crond.d/fido-updater /etc/cron.d/;
cp utils/init.d/fido-updater /etc/init.d/;
update-rc.d fido-updater default;
cp utils/config.default.json ./config.json;
```



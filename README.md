Mobile App Scaffolding
==================
### Requirement
1. Angular
2. Ionic Framework
3. Cordova
4. Grunt
5. Bower
6. Compass

### Development Environment

Install [node.js](http://nodejs.org/download/)

Install [ruby](https://www.ruby-lang.org/en/installation/)

Setup build system

    $ npm install -g grunt-cli 

Setup development utility

    $ npm install -g yo bower generator-angular

Setup Compass for scss compiler 

    $ gem install compass sass-globbing

Clone the code

    $ git clone https://github.com/Nengock/mhbb.git mhbb

Move to code folder

    $ cd mhbb
    $ npm install                 //install node dependencies
    $ bower install               //install app dependency components

All the node dependencies will be installed under `node_modules` folder. All the components used by the app, will be installed under `bower_components`.


### Some commands that might be needed

After initial `git clone`, there is no `platforms` or `plugins` folder, which we can add it later when we add specific platform or install cordova plugin. 

Add cordova platform

    $ grunt platform:add:ios

Install cordova plugin

    $ cordova plugin add org.apache.cordova.device

Here are the list of plugins required so far
    de.appplant.cordova.plugin.local-notification 0.7.4 "LocalNotification"
    org.apache.cordova.console 0.2.10 "Console"
    org.apache.cordova.device 0.2.11 "Device"
    org.apache.cordova.dialogs 0.2.10-dev "Notification"
    org.apache.cordova.geolocation 0.3.10 "Geolocation"
    org.apache.cordova.network-information 0.2.11 "Network Information"
    org.apache.cordova.statusbar 0.1.8 "StatusBar"
    org.apache.cordova.vibration 0.3.11-dev "Vibration"
    
### Run testing server

    $ grunt serve

It will automatically open a tab in your browser


### Scafolding for angular module

By using [Yeoman](http://yeoman.io/), and `generator-angular`, we can create several angular components such as `controller`, `view`, `directive`, `service` etc.

    $ yo angular:route main

above command will generate `controllers/main.js` contain `MainCtrl` and corresponding html template `views/main.html`. Complete guide of this tool can be seen in [Yeoman Angular Generator](https://github.com/yeoman/generator-angular/blob/master/readme.md)

### A way to install another js library

If we need to use another js library from github, we can install it using bower. During build process, all the necessary files will automatically included in `index.html`

install `lodash` js library

    $ bower install --save https://github.com/lodash/lodash.git 


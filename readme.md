# XOXCO Development Starter Kit

This project contains many helpful tools useful for building a variety
of different type of sites. It has been compiled with re-use in mind,
and is thus stored in a generic state, ready to be customized for each
project.

## Getting Started

1. Fork the project from Github into a new folder
2. Run `npm install`
3. Run `bower install`
4. Run `grunt`

This will install all the dependencies,
install some front end libraries,
and run all of the normal build processes
to freshen up all the files.

## Customizing the Starter Kit

This project is intended only to be a good, generic starting point. Each type
of project will look slightly different, and you should feel free to move files
around, delete unnecessary components, and generally personalize things as necessary.

You'll want to customize some of the specifics of Gruntfile.js, such as:

* Specific files to watch or copy
* Specific libraries to include in the minified libs.js
* Any additional steps required to build
* Running tests


## Useful Commands

`grunt` - run all tasks for development environment.

`grunt prod` - run all tasks for a production environment

`grunt watch` - watch all the files in the build folder for changes and run appropriate tasks

`grunt nodemon` - launch the node server.js application, and restart it if anything changes.

## Installing Front End Javascript Libraries with Bower

`bower install --save <library>`

this will cause the library to be installed into public/libs/
and update the bower.json file.

## Installing Node Modules with NPM

`npm install --save <module>`

This will cause the module to be installed in node_modules/
and update the package.json file.


# What's in this starter kit?

### The dev folder

The dev folder contains all of the
component files that comprise things like
the front end application, the CSS files,
the Angular views, and other template files.

Everything in dev/js will be concatenated, minified, and
copied into public/js/app.js by Grunt.

dev/css/style.scss and all of its subordinate component files
will be run through SASS, then run through an auto-prefixer,
and then copied into public/css/style.css

Scripts used by the build process should go in dev/scripts/.
By default, grunt will execute dev/scripts/build.sh

### The public folder

The public folder holds the public facing elements of a site.

All JS, CSS and view files should be managed in the dev/ folder.

Only static assets should be placed in the public folder.

There is one exception:
Javascript libraries that are installed by Bower are placed in the public/js/libs folder.
These files *can* be concatinated and minfied by Grunt, but a specific list of files must
be added to the Gruntfile.js config

### The views folder

This folder contains files used by the Node.js server. Only relevant if you are
going to use a Node.js app for more than creating a local test environment.

### The boilerplates folder

This folder contains templates for various project types, such as Drupal modules
and Node.JS apps.

These can be copied and customized to get started.

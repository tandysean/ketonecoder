# ketonecoder
blog and recipe site for ketogenic experiment at weight loss and diabetes control.

## Installation

Node Version: v8.3.0

Just clone this repo or download the zip file. `cd` into the directory and run

    npm install

## Developing App with [Hot Reload]
To develop your own react application, you can take advantage of React Hot Loader and Webpack Dev Server. To develop app with hot reload:

    npm run dev

Now you can access your react application on http://localhost:8080

## Production build and Deploy
To make a production build of your project, run the following commands

    npm run build
  
This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`.

`server.js` will be used for serving the application on port 3000 and `index.js` is the actual react app itself.

Finally run

    npm start

The you will be able to access this app from http://localhost:3000.

To get a distributable tarball of your application, run this command

    npm pack

Remember that you have to run `npm run build` before doing this. This will create a tar.gz file in your root folder. The contents in this file is deployable. All you need to do is copy the contents inside package folder inside this tar.gz file to your server and run the app with something like [pm2].

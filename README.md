# Next Auth standalone login example

This repo is a minimal reproduction case for [next-auth issue #1542](https://github.com/nextauthjs/next-auth/issues/1542).

## How to run

- Install dependencies with `npm install`
- Run the app with `npm start`
- Run the cli with `npm run cli login`

Your default browser should open the login page. You don't need to provide any credentials, just click "Login with Credentials".

Current behavior: after clicking "Login with Credentials", the app will redirect to the app inital page.

Expected behavior: after clicking "Login with Credentials", the app should redirect to the cli server route (`http://127.0.0.1:<random port>`) allowing cli to get the token and close the server.

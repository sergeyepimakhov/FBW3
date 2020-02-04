# Deployment

Up to now, you've been working in a development environment, using Express/Node as a web server to share your site to the local browser/network, and running your website with (insecure) development settings that expose debugging and other private information. Before you can host a website externally you're first going to have to:

    - Choose an environment for hosting the Express app.
    - Make a few changes to your project settings.
    - Set up a production-level infrastructure for serving your website.

## What is a production environment?

The production environment is the environment provided by the server computer where you will run your website for external consumption. The environment includes:

    - Computer hardware on which the website runs.
    - Operating system (e.g. Linux or Windows).
    - Programming language runtime and framework libraries on top of which your website is written.
    - Web server infrastructure, possibly including a web server, reverse proxy, load balancer, etc.
    - Databases on which your website is dependent.

## Config file

Let's create create a new file config.js

```js
const config = {
  env: process.env.NODE_ENV || "development"
};

const devConfig = {
  db: "mongodb://localhost:27017/password-login",
  jwt_key: "iamaverysecretkey",
  port: 5007
};

const prodConfig = {
  db: process.env.MONGO_URI,
  jwt_key: "iamaverysecretkey",
  port: process.env.PORT
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;

module.exports = Object.assign({}, config, currentConfig);
```

app.js
```js
dotenv.config({path : './.env'});
const env = require("./config.js");
...
//connectDB();
connectDB(env.db);
...
// const PORT = process.env.PORT || 5007;
const PORT = env.port;
```

db.js
```js
const connectDB = async (db) =>{
...
// const conn = await mongoose.connect(process.env.MONGO_URI , {
const conn = await mongoose.connect(db, {
...
```

/routes/users.js
```js
const env = require("../config.js");
...
let token = jwt.sign({id:req.user.email},env.jwt_key)
```

passport.js
```js
const env = require("../config.js");
...
// secretOrKey: process.env.JWT_SECRET
secretOrKey: env.jwt_key
```

sendEmail.js
```js
const env = require("../config.js");
...

```

## Deployment with Now

ZEIT Now is a cloud deployment and severless solution offering a seamless way to deploy both static and dynamic applications.

Before we use it, let's head over to `zeit.co` and create an account. In my opinion, their free tier is amazingly useful, so you'll be able to keep using this account after this tutorial.

How to install
```bash
npm install -g now
```
Now requires a configuration file `now.json` with which it builds a node application and creates a lambda. In the absence of the configuration file, the files are served statically. Create a file named `now.json` in the root folder of the application.

`now.json`
```js
{
  "name": "passwort-jwt",
  "builds": [{ "src": "app.js", "use": "@now/node" }],
  "version": 2,
  "routes": [{ "src": "/(.*)", "dest": "app.js" }]
}
```

Here, we first specified the version of the Now platform (version 2), then we specified the source file for the node app. The @now/node-server builder is used and recommended for node apps.

Using the @now/node builder throws an error when you access the application after deployment. @now/node is recommended for single node serverless functions.

In the command line, deploy your application using:
```bash
now
```

If it doesn't work
```bash
now login
# your email
> We sent an email to .....@...... Please follow the steps provided
  inside it and make sure the security code matches Proud Ant.
✔ Email confirmed
> Congratulations! You are now logged in. In order to deploy something, run `now`.
```
Now 
```bash
now dev

# then
now
```

Small fixups
app.js
```
const path = require('path')
...
// setup views
app.set("views", path.join(__dirname, "views"));
```

The the logs
```bash
now logs passwort-jwt.now.sh
```

## Secrets

### Development
If you have `.env`in the root folder you can start now dev server of now:
```bash
now dev
```

### Production
The trick with .env will not work anymore. We have to add secrets from the cli.
The syntax ta a new secret is the following
```bash
# now secrets add <secret-name> <secret-value>
now secrets add jwt_secret 'your-jwt-secret'
now secrets add mongo_uri 'your-mongo-uri'
now secrets add my_email 'your-email-address'
now secrets add my_pass 'your-email-password'
```
and then change the `now.js`
```json
...
"env": {
    "JWT_SECRET": "@jwt_secret",
    "MONGO_URI": "@mongo_uri",
    "MY_EMAIL": "@my_email",
    "MY_PASS": "@my_pass"
  }
```

Then 
```bash
# now
now --prod
```

Logs
```bash
now logs passwort-jwt.now.sh --follow
```


## Reference

- https://zeit.co/new
- https://github.com/zeit/now
- https://scotch.io/tutorials/easily-deploy-a-serverless-node-app-with-zeit-now
- https://dev.to/almadireddy/full-stack-101-1-installing-node-zeit-now-and-deploying-5d70
- https://medium.com/@joranquinten/how-to-deploy-a-nodejs-server-on-zeits-now-platform-e713207313d3

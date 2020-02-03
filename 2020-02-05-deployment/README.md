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
const { env } = process;

const config = {
  env: env.NODE_ENV || "development"
};

const devConfig = {
  db: "mongodb://localhost:27017/password-login",
  jwt_key: "iamaverysecretkey",
  port: 5007
};

const prodConfig = {
  db: env.MONGO_URI,
  jwt_key: "iamaverysecretkey",
  port: env.PORT
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;

module.exports = Object.assign({}, config, currentConfig);
```

app.js
```js
const env = require("./config/config.js");
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

passport.js
```js
const env = require("./config.js");
...
// secretOrKey: process.env.JWT_SECRET
secretOrKey: env.jwt_key
```

sendEmail.js
```js
const env = require("./config.js");
...

```



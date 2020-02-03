const { env } = process;

const config = {
  env: env.NODE_ENV || "development"
};

const devConfig = {
  db: "mongodb://localhost:27017/password-login",
  jwt_key: "iamaverysecretkey",
  port: 5007,
  email: env.MY_EMAIL,
  email_pass: env.MY_PASS
};

const prodConfig = {
  db: env.MONGO_URI,
  jwt_key: env.JWT_SECRET,
  port: 5007,
  email: env.MY_EMAIL,
  email_pass: env.MY_PASS
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;

module.exports = Object.assign({}, config, currentConfig);
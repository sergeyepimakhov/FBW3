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
  port: 5007
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;

module.exports = Object.assign({}, config, currentConfig);
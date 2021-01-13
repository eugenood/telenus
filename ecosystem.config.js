module.exports = {
  apps: [
    {
      name: "TeleNUS",
      script: "main.js",

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      watch: true,
      max_memory_restart: "250M",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

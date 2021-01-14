module.exports = {
  apps: [
    {
      name: "TeleNUS",
      script: "main.js",
      watch: false,
      max_memory_restart: "250M",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      error_file: ".logs/error.log",
      out_file: ".logs/out.log",
      log_file: ".logs/combined.log",
      time: true,
    },
  ],
};

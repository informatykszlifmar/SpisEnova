# SpisEnova
Hi for run You need make dbconfig.js file , whit this example body :
 const sqlConfig = {
    user: "DATABASE_USERNAME",
    password: "DATABASE_PASSWORD",
    database: "DATABASE_NAME",
    server: "SERVER_END_pINT/IP",
    port: 1433,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false, // change to true for local dev / self-signed certs
    },
  };
module.exports = sqlConfig;

Please change DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, SERVER_END_pINT/IP with Yours value. 

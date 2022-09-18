# SpisEnova
Hi for run You need make dbconfig.js file , whit this example body :<br>
 const sqlConfig = {<br>
    user: "DATABASE_USERNAME",<br>
    password: "DATABASE_PASSWORD",<br>
    database: "DATABASE_NAME",<br>
    server: "SERVER_END_POINT/IP",<br>
    port: 1433,<br>
    pool: {<br>
      max: 10,<br>
      min: 0,<br>
      idleTimeoutMillis: 30000,<br>
    },<br>
    options: {<br>
      encrypt: false, // for azure<br>
      trustServerCertificate: false, // change to true for local dev / self-signed certs<br>
    },<br>
  };<br>
module.exports = sqlConfig;<br>

Please change DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, SERVER_END_pINT/IP with Yours value. 

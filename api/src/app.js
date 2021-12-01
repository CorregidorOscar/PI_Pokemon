const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const errorHandler = require("./utils/midlewares/errorHandler.js");
const setHeaders = require("./utils/midlewares/setHeaders.js");

//

require("./db.js");

const server = express();

server.name = "API";
//parsear json forma correcta
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
//dar output consola cada vez en una request
server.use(morgan("dev"));
//headers
server.use(setHeaders);
// server.use((req, res, next) => {
//   //soluciona el problema de que al hacer una request en postman funcione pero no en el front(problemas de cores)
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from matchear con el dominio del deploy
//   //
//   res.header("Access-Control-Allow-Credentials", "true");
//   //para que solo pueda aceptar esos tipos de headers
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   //restringir metodos
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

server.use("/", routes);

// Error catching endware.
server.use(errorHandler);
// server.use((err, req, res, next) => {
//   // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

module.exports = server;

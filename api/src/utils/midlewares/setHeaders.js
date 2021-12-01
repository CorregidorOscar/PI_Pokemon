function setHeaders(req, res, next) {
  //soluciona el problema de que al hacer una request en postman funcione pero no en el front(problemas de cores)
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from matchear con el dominio del deploy
  //
  res.header("Access-Control-Allow-Credentials", "true");
  //para que solo pueda aceptar esos tipos de headers
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  //restringir metodos
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
}
module.exports = setHeaders;

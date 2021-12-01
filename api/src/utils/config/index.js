//no necesitar estar en una variable sino en el entorno de ejecucion
require("dotenv").config();

module.exports = {
  DB_USER: process.env.DB_USER || postgres,
  DB_PASSWORD: process.env.DB_PASSWORD || postgres,
  DB_HOST: process.env.DB_HOST || localhost,
};

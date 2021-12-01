const axios = require("axios");
const { URL_TYPE } = require("../../utils/constants");
class APIController {
  static async getAllTypes() {
    return axios.get(`${URL_TYPE}`).then((r) =>
      r.data.results.map((e) => ({
        name: e.name,
      }))
    );
  }
}

module.exports = APIController;

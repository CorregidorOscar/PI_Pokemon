const { Router } = require("express");
const { TypeController } = require("../controllers");

const router = Router();

router.get("/", TypeController.getAllTypes);
// router.get("/:id", typeController.getByID);
// // router.get("/:name", typeController.getByName);
// router.post("/", typeController.add);

// router.put("/:id", typeController.update);
// router.delete("/:id", typeController.delete);
module.exports = router;

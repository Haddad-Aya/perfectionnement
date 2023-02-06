const express = require("express")
const router = express.Router()

const partenaireController = require("../controller/partenaire.controller")

router.get("/getAllPartenaire", partenaireController.getAllPartenaire)
router.get("/getByIdPartenaire/:id", partenaireController.getByIdPartenaire)
router.post("/createPartenaire", partenaireController.createPartenaire)
router.put("/updatePartenaire/:id", partenaireController.updatePartenaire)
router.delete("/deletePartenaire/:id", partenaireController.deletePartenaire)


module.exports = router
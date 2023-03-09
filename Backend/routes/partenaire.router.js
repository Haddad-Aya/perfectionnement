const express = require("express")
const router = express.Router()

const partenaireController = require("../controller/partenaire.controller")

router.get("/getAllPartenaire", partenaireController.getAllPartenaire)
router.get("/getAllDemandePartenaire", partenaireController.getAllDemandePartenaire)
router.get("/getByIdPartenaire/:idPartenaire", partenaireController.getByIdPartenaire)
router.post("/createPartenaire", partenaireController.createPartenaire)
router.post("/demandePartenaire", partenaireController.demandePartenaire)
router.put("/updatePartenaire/:idPartenaire", partenaireController.updatePartenaire)
router.delete("/deletePartenaire/:idPartenaire", partenaireController.deletePartenaire)
router.delete("/deleteDemandePartenaire/:idDemande", partenaireController.deleteDemandePartenaire)


module.exports = router
const express = require("express")
const router = express.Router()

const adresseController = require("../controller/adresse.controller")

router.get("/getAllAdresse", adresseController.getAllAdresse)
router.get("/getByIdAdresse/:idAdresse", adresseController.getByIdAdresse)
router.get("/getByIdCommande/:idCommande", adresseController.getByIdCommande)
router.post("/createAdresse", adresseController.createAdresse)
router.put("/updateAdresse/:idAdresse", adresseController.updateAdresse)
router.delete("/deleteAdresse/:idClient", adresseController.deleteAdresse)


module.exports = router
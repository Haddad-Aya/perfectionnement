const express = require("express")
const router = express.Router()

const commandeController = require("../controller/detailCommande.controller")
router.get("/getAllDetailCommande", commandeController.getAllDetailCommande)
router.get("/getByIdDetailCommande/:idDetailCommande", commandeController.getByIdDetailCommande)
router.get("/getByIdProduit/:idProduit", commandeController.getByIdProduit)
router.get("/getByIdCommande/:idCommande", commandeController.getByIdCommande)
router.get("/detailCommande/:idCommande", commandeController.detailCommande)
router.post("/createDetailCommande", commandeController.createDetailCommande)
module.exports = router
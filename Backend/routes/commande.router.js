const express = require("express")
const router = express.Router()

const commandeController = require("../controller/commande.controller")

router.get("/getAllCommande", commandeController.getAllCommande)
router.get("/getByIdCommande/:idCommande", commandeController.getByIdCommande)
router.get("/getByIdClient/:idClient", commandeController.getByIdClient)
router.get("/nombreCommande", commandeController.nombreCommande)
router.get("/dateCommandeByIdClient/:idClient", commandeController.dateCommandeByIdClient)
router.post("/createCommande", commandeController.createCommande)
router.put("/updateCommande/:idCommande", commandeController.updateCommande)
router.delete("/deleteCommande/:idCommande", commandeController.deleteCommande)
router.get("/commande", commandeController.commande)

module.exports = router
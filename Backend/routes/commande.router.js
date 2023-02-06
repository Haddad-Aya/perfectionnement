const express = require("express")
const router = express.Router()

const commandeController = require("../controller/commande.controller")

router.get("/getAllCommande", commandeController.getAllCommande)
router.get("/getByIdCommande/:id", commandeController.getByIdCommande)
router.post("/createCommande", commandeController.createCommande)
router.put("/updateCommande/:id", commandeController.updateCommande)
router.delete("/deleteCommande/:id", commandeController.deleteCommande)


module.exports = router
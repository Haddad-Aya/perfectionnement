const express = require("express")
const router = express.Router()

const commandeController = require("../controller/envoiMail.controller")

//router.get("/getMail", commandeController.getAllCommande)
router.post("/commandeEnvoyer", commandeController.commandeEnvoyer)
router.post("/demaindePartenaire", commandeController.demaindePartenaire)
router.post("/contactEnvoyer", commandeController.contactEnvoyer)

module.exports = router
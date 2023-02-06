const express = require("express")
const router = express.Router()

const envoiemailController = require("../controller/envoiemail.controller")

router.get("/getAllEnvoiEmail", envoiemailController.getAllEnvoiEmail)
router.get("/getByIdEnvoiEmail/:id", envoiemailController.getByIdEnvoiEmail)
router.post("/createEnvoiEmail", envoiemailController.createEnvoiEmail)
router.put("/updateEnvoiEmail/:id", envoiemailController.updateEnvoiEmail)
router.delete("/deleteEnvoiEmail/:id", envoiemailController.deleteEnvoiEmail)


module.exports = router
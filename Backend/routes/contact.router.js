const express = require("express")
const router = express.Router()

const contactController = require("../controller/contact.controller")

router.get("/getAllContact", contactController.getAllContact)
router.get("/getByIdContact/:idContact", contactController.getByIdContact)
router.post("/createContact", contactController.createContact)
router.put("/updateContact/:idContact", contactController.updateContact)
router.delete("/deleteContact/:idContact", contactController.deleteContact)


module.exports = router
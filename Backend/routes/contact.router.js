const express = require("express")
const router = express.Router()

const contactController = require("../controller/contact.controller")

router.get("/getAllContact", contactController.getAllContact)
router.get("/getByIdContact/:id", contactController.getByIdContact)
router.post("/createContact", contactController.createContact)
router.put("/updateContact/:id", contactController.updateContact)
router.delete("/deleteContact/:id", contactController.deleteContact)


module.exports = router
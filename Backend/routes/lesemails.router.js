const express = require("express")
const router = express.Router()

const lesemailsController = require("../controller/lesemails.controller")

router.get("/getAllLesEmail", lesemailsController.getAllLesEmail)
router.get("/getByIdLesEmail/:idEmail", lesemailsController.getByIdLesEmail)
router.post("/createLesEmail", lesemailsController.createLesEmail)
router.put("/updateLesEmail/:idEmail", lesemailsController.updateLesEmail)
router.delete("/deleteEmail/:idEmail", lesemailsController.deleteEmail)


module.exports = router
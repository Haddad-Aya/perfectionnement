const express = require("express")
const router = express.Router()

const lesemailsController = require("../controller/lesemails.controller")

router.get("/getAllLesEmail", lesemailsController.getAllLesEmail)
router.get("/getByIdLesEmail:id", lesemailsController.getByIdLesEmail)
router.post("/createLesEmail", lesemailsController.createLesEmail)
router.put("/updateLesEmail/:id", lesemailsController.updateLesEmail)
router.delete("/:id/deleteLesEmail", lesemailsController.deleteLesEmail)


module.exports = router
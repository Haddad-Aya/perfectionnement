const express = require("express")
const router = express.Router()

const adminController = require("../controller/admin.controller")

router.get("/getAllAdmin", adminController.getAllAdmin)
router.get("/getByIdAdmin/:id", adminController.getByIdAdmin)
router.post("/createAdmin", adminController.createAdmin)
router.put("/updateAdmin/:id", adminController.updateAdmin)
router.delete("/deleteAdmin/:id", adminController.deleteAdmin)


module.exports = router
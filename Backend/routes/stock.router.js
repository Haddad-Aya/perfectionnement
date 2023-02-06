const express = require("express")
const router = express.Router()

const stockController = require("../controller/stock.controller")

router.get("/getAllStock", stockController.getAllStock)
router.get("/getByIdStock/:id", stockController.getByIdStock)
router.post("/createStock", stockController.createStock)
router.put("/updateStock/:id", stockController.updateStock)
router.delete("/deleteStock/:id", stockController.deleteStock)


module.exports = router
const express = require("express")
const router = express.Router()

const equipeController = require("../controller/equipe.controller")

router.get("/getAllEquipe", equipeController.getAllEquipe)
router.get("/getByIdEquipe/:id", equipeController.getByIdEquipe)
router.post("/createEquipe", equipeController.createEquipe)
router.put("/updateEquipe/:id", equipeController.updateEquipe)
router.delete("/deleteEquipe/:id", equipeController.deleteEquipe)


module.exports = router
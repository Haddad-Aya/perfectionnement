const express = require("express")
const router = express.Router()

const equipeController = require("../controller/equipe.controller")

router.get("/getAllEquipe", equipeController.getAllEquipe)
router.get("/getByIdEquipe/:idEquipe", equipeController.getByIdEquipe)
router.post("/createEquipe", equipeController.createEquipe)
router.put("/updateEquipe/:idEquipe", equipeController.updateEquipe)
router.delete("/deleteEquipe/:idEquipe", equipeController.deleteEquipe)


module.exports = router
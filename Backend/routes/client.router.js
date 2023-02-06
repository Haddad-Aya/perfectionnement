const express = require("express")
const router = express.Router()

const clientController = require("../controller/client.controller")

router.get("/getAllClient", clientController.getAllClient)
router.get("/getByIdClient/:id", clientController.getByIdClient)
router.post("/createClient", clientController.createClient)
router.put("/updateClient/:id", clientController.updateClient)
router.delete("/deleteClient/:id", clientController.deleteClient)


module.exports = router
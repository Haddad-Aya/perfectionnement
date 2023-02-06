const express = require("express")
const router = express.Router()

const produitController = require("../controller/produit.controller")

router.get("/getAllProduit", produitController.getAllProduit)
router.get("/getByIdProduit/:id", produitController.getByIdProduit)
router.post("/createProduit", produitController.createProduit)
router.put("/updateProduit/:id", produitController.updateProduit)
router.delete("/deleteProduit/:id", produitController.deleteProduit)


module.exports = router
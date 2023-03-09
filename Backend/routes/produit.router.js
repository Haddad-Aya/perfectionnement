const express = require("express")
const router = express.Router()

const produitController = require("../controller/produit.controller")

router.get("/getAllProduit", produitController.getAllProduit)
router.get("/getByIdProduit/:idProduit", produitController.getByIdProduit)
router.get("/getByNomCategorie/:nomCategorie", produitController.getByNomCategorie)
router.get("/getByNom/:nom", produitController.getByNomProduit)
router.post("/createProduit", produitController.createProduit)
router.put("/updateProduit/:idProduit", produitController.updateProduit)
router.delete("/deleteProduit/:idProduit", produitController.deleteProduit)
router.delete("/deleteProduitParCategorie/:nomCategorie", produitController.deleteProduitParCategorie)

module.exports = router
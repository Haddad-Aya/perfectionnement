const express = require("express")
const router = express.Router()

const categorieController = require("../controller/categorie.controller")

router.get("/getAllCategorie", categorieController.getAllCategorie)
router.get("/getByIdCategorie/:idCategorie", categorieController.getByIdCategorie)
router.post("/createCategorie", categorieController.createCategorie)
router.put("/updateCategorie/:idCategorie", categorieController.updateCategorie)
router.delete("/deleteCategorie/:idCategorie", categorieController.deleteCategorie)


module.exports = router
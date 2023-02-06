const express = require("express")
const router = express.Router()

const categorieController = require("../controller/categorie.controller")

router.get("/getAllCategorie", categorieController.getAllCategorie)
router.get("/getByIdCategorie/:id", categorieController.getByIdCategorie)
router.post("/createCategorie", categorieController.createCategorie)
router.put("/updateCategorie/:id", categorieController.updateCategorie)
router.delete("/deleteCategorie/:id", categorieController.deleteCategorie)


module.exports = router
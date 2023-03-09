const express = require("express")
const router = express.Router()
const blogController = require("../controller/blog.controller")

router.get("/getAllBlog", blogController.getAllBlog)
router.get("/getAllBlogBody", blogController.getAllBlogBody)
router.get("/getByIdBlog/:idBlog", blogController.getByIdBlog)
router.post("/createBlog", blogController.createBlog)
router.put("/updateBlog/:idBlog", blogController.updateBlog)
router.delete("/deleteBlog/:idBlog", blogController.deleteBlog)


module.exports = router
const pool = require("../database/index")
const blogController = {
getAllBlog: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from blog")
        res.json({
            data: rows
        })

        
    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })

    } 
},
getAllBlogBody: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from blog limit 4")
        res.json({
            data: rows
        })

        
    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })

    } 
},
getByIdBlog: async(req, res)=>{
    try{
        const { idBlog } = req.params
        const [rows, fields]= await pool.query("select * from blog where idBlog = ?", [idBlog])
        res.json({
            data:rows
        })

    }catch(error){
        console.log(error)
        res.json({
            status: "error"
        })
    }
},
createBlog: async(req, res)=>{
    try{
        const {urlImage,date,question,contenu} = req.body
        const sql= 'INSERT INTO blog (urlImage,date,question,contenu) value (?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [urlImage,date,question,contenu])
        res.json({
            data:rows
        })

    }catch(error){
        console.log(error)
        res.json({
            status: "error"
        })
    }
},
updateBlog: async(req, res)=>{
    try{
        const { urlImage,date,question,contenu } = req.body
        const {idBlog} = req.params
        const sql= 'update blog set  urlImage= ? , date= ? , question= ? , contenu= ? where idBlog = ?'
        const [rows, fields]= await pool.query(sql,[urlImage,date,question,contenu,idBlog])
        res.json({
            data:rows
        })

    }catch(error){
        console.log(error)
        res.json({
            status: "error"
        })
    }
},
deleteBlog: async(req, res)=>{
    try{
        const {idBlog} = req.params
        const [rows, fields]= await pool.query('delete from blog where idBlog = ?' ,[idBlog])
        res.json({
            data:rows
        })

    }catch(error){
        console.log(error)
        res.json({
            status: "error"
        })
    }
}

}

module.exports = blogController
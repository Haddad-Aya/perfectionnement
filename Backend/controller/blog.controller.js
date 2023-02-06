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
getByIdBlog: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from blog where idBlog = ?", [id])
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
        const {urlImage,lienDetailBlog,date,question,contenu} = req.body
        const sql= 'INSERT INTO blog (urlImage,lienDetailBlog,date,question,contenu) value (?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [urlImage,lienDetailBlog,date,question,contenu])
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
        const { urlImage,lienDetailBlog,date,question,contenu } = req.body
        const {id} = req.params
        const sql= 'update blog set  urlImage= ? , lienDetailBlog= ? , date= ? , question= ? , contenu= ? where idBlog = ?'
        const [rows, fields]= await pool.query(sql,[urlImage,lienDetailBlog,date,question,contenu,id])
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
        const id = req.params
        const [rows, fields]= await pool.query('delete blog where idBlog = ?' ,[id])
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
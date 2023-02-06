const pool = require("../database/index")
const categorieController = {
getAllCategorie: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from categorie")
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
getByIdCategorie: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from categorie where idCategorie = ?", [id])
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
createCategorie: async(req, res)=>{
    try{
        const {nomCategorie,idProduit} = req.body
        const sql= 'INSERT INTO categorie (nomCategorie,idProduit) value (?,?)'
        const [rows, fields]= await pool.query(sql, [nomCategorie,idProduit])
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
updateCategorie: async(req, res)=>{
    try{
        const { nomCategorie,idProduit } = req.body
        const {id} = req.params
        const sql= 'update categorie set  nomCategorie= ? , idProduit= ? where id = ?'
        const [rows, fields]= await pool.query(sql,[id])
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
deleteCategorie: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete categorie where idCategorie = ?' ,[id])
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

module.exports = categorieController
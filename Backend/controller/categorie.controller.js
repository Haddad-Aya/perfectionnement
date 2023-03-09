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
        const { idCategorie } = req.params
        const [rows, fields]= await pool.query("select * from categorie where idCategorie = ?", [idCategorie])
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
        const {nomCategorie} = req.body
        const sql= 'INSERT INTO categorie (nomCategorie) value (?)'
        const [rows, fields]= await pool.query(sql, [nomCategorie])
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
        const { nomCategorie } = req.body
        const {idCategorie} = req.params
        const sql= 'update categorie set  nomCategorie= ? where idCategorie = ?'
        const [rows, fields]= await pool.query(sql,[nomCategorie,idCategorie])
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
        const {idCategorie} = req.params
        const sql='delete from categorie where idCategorie = ?'
        const [rows, fields]= await pool.query(sql ,[idCategorie])
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
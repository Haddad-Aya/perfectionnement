const pool = require("../database/index")
const produitController = {
getAllProduit: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from produit")
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
getByIdProduit: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from produit where idProduit = ?", [id])
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
createProduit: async(req, res)=>{
    try{
        const { urlImage,etat,description,nom,prix } = req.body
        const sql= 'INSERT INTO produit (urlImage,etat,description,nom,prix) value (?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [urlImage,etat,description,nom,prix])
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
updateProduit: async(req, res)=>{
    try{
        const { urlImage,etat,description,nom,prix } = req.body
        const {id} = req.params
        const sql= 'update produit set  urlImage= ? , etat= ? , description= ? , nom= ? , prix= ? where idProduit = ?'
        const [rows, fields]= await pool.query(sql,[urlImage,etat,description,nom,prix,id])
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
deleteProduit: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete produit where idProduit = ?' ,[id])
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

module.exports = produitController
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
        const { idProduit } = req.params
        const [rows, fields]= await pool.query("select * from produit where idProduit = ?", [idProduit])
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

getByNomCategorie: async(req, res)=>{
    try{
        const { nomCategorie } = req.params
        const sql='select * from produit where nomCategorie = ?'
        const [rows, fields]= await pool.query(sql,[nomCategorie])
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
getByNomProduit: async(req, res)=>{
    try{
        const { nom } = req.params
        const sql='select * from produit where nom = ?'
        const [rows, fields]= await pool.query(sql,[nom])
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
        const { urlImage,nom,prix,nomCategorie,quantite,description } = req.body
        const sql= 'INSERT INTO produit (urlImage,nom,prix,nomCategorie,quantite,description) value (?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [urlImage,nom,prix,nomCategorie,quantite,description])
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
        const { urlImage,nom,prix,nomCategorie,quantite,description } = req.body
        const {idProduit} = req.params
        const sql= 'update produit set urlImage= ?  ,  nom= ? , prix= ? ,nomCategorie=?, quantite=?, description=? where idProduit = ?'
        const [rows, fields]= await pool.query(sql,[urlImage,nom,prix,nomCategorie,quantite,description,idProduit])
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
        const {idProduit} = req.params
        const sql='delete from produit where idProduit = ?'
        const [rows, fields]= await pool.query(sql ,[idProduit])
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
deleteProduitParCategorie: async(req, res)=>{
    try{
        const {nomCategorie} = req.params
        const sql='delete from produit where nomCategorie = ?'
        const [rows, fields]= await pool.query(sql ,[nomCategorie])
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
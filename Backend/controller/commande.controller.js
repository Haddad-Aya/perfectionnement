const pool = require("../database/index")
const commandeController = {
getAllCommande: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from commande")
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
getByIdCommande: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from commande where idCommande = ?", [id])
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
createCommande: async(req, res)=>{
    try{
        const {dateCommande,idProduit,idClient} = req.body
        const sql= 'INSERT INTO commande (dateCommande,idProduit,idClient) value (?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [dateCommande,idProduit,idClient])
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
updateCommande: async(req, res)=>{
    try{
        const { dateCommande,idProduit,idClient } = req.body
        const {id} = req.params
        const sql= 'update commande set  dateCommande= ? , idProduit= ? , idClient= ? where idCommande = ?'
        const [rows, fields]= await pool.query(sql,[dateCommande,idProduit,idClient,id])
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
deleteCommande: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete commande where idCommande = ?' ,[id])
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

module.exports = commandeController
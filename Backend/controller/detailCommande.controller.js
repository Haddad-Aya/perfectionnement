const pool = require("../database/index")
const commandeController = {
    getAllDetailCommande: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from detailCommande")
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
    getByIdDetailCommande: async (req, res) => {
        try {
            const { idDetailCommande } = req.params
            const [rows, fields] = await pool.query("select * from detailCommande where idDetailCommande = ?", [idDetailCommande])
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
    getByIdProduit: async (req, res) => {
        try {
            const { idProduit } = req.params
            const [rows, fields] = await pool.query("select * from detailCommande where idProduit = ?", [idProduit])
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
    getByIdCommande: async (req, res) => {
        try {
            const { idCommande } = req.params
            const [rows, fields] = await pool.query("select * from detailCommande where idCommande = ?", [idCommande])
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
    createDetailCommande: async(req, res)=>{
        try{
            const {idCommande,idProduit,quantite} = req.body
            const sql= 'INSERT INTO detailCommande (idCommande,idProduit,quantite) value (?,?,?)'
            const [rows, fields]= await pool.query(sql, [idCommande,idProduit,quantite])
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
    updateDetailCommande: async(req, res)=>{
        try{
            const {idCommande,idProduit,quantite} = req.body
            const {idDetailCommande} = req.params
            const sql= 'update detailCommande set  idCommande= ? , idProduit= ? , quantite= ?  where idDetailCommande = ?'
            const [rows, fields]= await pool.query(sql,[idCommande,idProduit,quantite,idDetailCommande])
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
    deleteDetailCommande: async(req, res)=>{
        try{
            const {idDetailCommande} = req.params
            const [rows, fields]= await pool.query('delete detailCommande where idDetailCommande = ?' ,[idDetailCommande])
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
    detailCommande: async (req, res) => {
        try {
            const { idCommande } = req.params
            const [rows, fields] = await pool.query("select d.idCommande,d.idProduit,d.quantite,p.nomCategorie,p.nom,p.prix,p.description,p.urlImage from detailCommande d , produit p where d.idProduit = p.idProduit and idCommande = ?", [idCommande])
            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = commandeController
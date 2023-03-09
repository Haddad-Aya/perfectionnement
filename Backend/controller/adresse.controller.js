const pool = require("../database/index")
const adresseController = {
getAllAdresse: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from adresse")
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
getByIdAdresse: async(req, res)=>{
    try{
        const { idAdresse } = req.params
        const [rows, fields]= await pool.query("select * from adresse where idAdresse = ?", [idAdresse])
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
getByIdCommande: async(req, res)=>{
    try{
        const { idCommande } = req.params
        const [rows, fields]= await pool.query("select * from adresse where idCommande = ?", [idCommande])
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
createAdresse: async(req, res)=>{
    try{
        const {adresseClient,ville,codePostale,pays,idCommande} = req.body
        const sql= 'INSERT INTO adresse (adresseClient,ville,codePostale,pays,idCommande) value (?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [adresseClient,ville,codePostale,pays,idCommande])
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
updateAdresse: async(req, res)=>{
    try{
        const { adresseClient,ville,codePostale,pays,idCommande } = req.body
        const {idAdresse} = req.params
        const sql= 'update adresse set adresseClient= ?,ville= ?,codePostale= ?,pays= ?,idCommande= ? where idAdresse = ?'
        const [rows, fields]= await pool.query(sql,[adresseClient,ville,codePostale,pays,idCommande,idAdresse])
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
deleteAdresse: async(req, res)=>{
    try{
        const idClient = req.params
        const [rows, fields]= await pool.query('delete adresse where idAdresse = ?' ,[idAdresse])
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

module.exports = adresseController
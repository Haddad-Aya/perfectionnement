const pool = require("../database/index")
const clientController = {
getAllClient: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from client")
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
getByIdClient: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from client where idClient = ?", [id])
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
createClient: async(req, res)=>{
    try{
        const { nom, prenom, email,telephone,adresse,ville,codePostal,pays,idProduit } = req.body
        const sql= 'INSERT INTO client (nom,prenom,email,telephone,adresse,ville,codePostal,pays,idProduit) value (?,?,?,?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom, prenom, email,telephone,adresse,ville,codePostal,pays,idProduit])
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
updateClient: async(req, res)=>{
    try{
        const { nom, prenom, email,telephone,adresse,ville,codePostal,pays,idProduit } = req.body
        const {id} = req.params
        const sql= 'update client set nom = ? ,prenom = ? ,email = ? ,telephone = ? ,adresse = ? ,ville = ? ,codePostal = ? ,pays = ? ,idProduit = ? where idClient = ?'
        const [rows, fields]= await pool.query(sql,[nom, prenom, email,telephone,adresse,ville,codePostal,pays,idProduit,id])
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
deleteClient: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete client where id = ?' ,[id])
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

module.exports = clientController
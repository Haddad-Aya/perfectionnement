const pool = require("../database/index")
const partenaireController = {
getAllPartenaire: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from partenaire")
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
getByIdPartenaire: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from partenaire where idPartenaire = ?", [id])
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
createPartenaire: async(req, res)=>{
    try{
        const {nom,prenom,email,telephone,detail,nomEntreprise} = req.body
        const sql= 'INSERT INTO partenaire (nom,prenom,email,telephone,detail,nomEntreprise) value (?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,email,telephone,detail,nomEntreprise])
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
updatePartenaire: async(req, res)=>{
    try{
        const { nom,prenom,email,telephone,detail,nomEntreprise } = req.body
        const {id} = req.params
        const sql= 'update partenaire set  nom= ? , prenom= ? , email= ? , telephone= ? , detail= ? , nomEntreprise= ? where idPartenaire = ?'
        const [rows, fields]= await pool.query(sql,[nom,prenom,email,telephone,detail,nomEntreprise,id])
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
deletePartenaire: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete partenaire where idPartenaire = ?' ,[id])
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

module.exports = partenaireController
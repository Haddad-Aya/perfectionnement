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
        const { idPartenaire } = req.params
        const [rows, fields]= await pool.query("select * from partenaire where idPartenaire = ?", [idPartenaire])
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
        const {nom,prenom,email,telephone,detail,entreprise,logoPartenaire} = req.body
        const sql= 'INSERT INTO partenaire (nom,prenom,email,telephone,detail,entreprise,logoPartenaire) value (?,?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,email,telephone,detail,entreprise,logoPartenaire])
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
createDemandePartenaire: async(req, res)=>{
    try{
        const {nom,prenom,email,telephone,detail,entreprise,logoPartenaire} = req.body
        const sql= 'INSERT INTO partenaire (nom,prenom,email,telephone,detail,entreprise,logoPartenaire) value (?,?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,email,telephone,detail,entreprise,logoPartenaire])
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
demandePartenaire: async(req, res)=>{
    try{
        const {nom,prenom,email,telephone,detail,entreprise} = req.body
        const sql= 'INSERT INTO demandePartenaire (nom,prenom,email,telephone,detail,entreprise) value (?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,email,telephone,detail,entreprise])
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
getAllDemandePartenaire: async(req, res)=>{
    try{
        const [rows, fields]= await pool.query("select * from demandePartenaire")
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
        const { nom,prenom,email,telephone,detail,entreprise,logoPartenaire} = req.body
        const {idPartenaire} = req.params
        const sql= 'update partenaire set  nom= ? , prenom= ? , email= ? , telephone= ? , detail= ? , entreprise= ?,logoPartenaire=?  where idPartenaire = ?'
        const [rows, fields]= await pool.query(sql,[nom,prenom,email,telephone,detail,entreprise,logoPartenaire,idPartenaire])
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
        const {idPartenaire} = req.params
        const [rows, fields]= await pool.query('delete from partenaire where idPartenaire = ?' ,[idPartenaire])
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
deleteDemandePartenaire: async(req, res)=>{
    try{
        const {idDemande} = req.params
        const [rows, fields]= await pool.query('delete from demandepartenaire where idDemande = ?' ,[idDemande])
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
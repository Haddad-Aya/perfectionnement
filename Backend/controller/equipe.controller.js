const pool = require("../database/index")
const equipeController = {
getAllEquipe: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from equipe")
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
getByIdEquipe: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from equipe where idEquipe = ?", [id])
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
createEquipe: async(req, res)=>{
    try{
        const {nom,prenom,specialite,lienPhoto,lienLinkedIn,lienMail,lienFacebook} = req.body
        const sql= 'INSERT INTO equipe (nom,prenom,specialite,lienPhoto,lienLinkedIn,lienMail,lienFacebook) value (?,?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,specialite,lienPhoto,lienLinkedIn,lienMail,lienFacebook])
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
updateEquipe: async(req, res)=>{
    try{
        const { nom,prenom,specialite,lienPhoto,lienLinkedIn,lienMail,lienFacebook } = req.body
        const {id} = req.params
        const sql= 'update equipe set  nom= ? , prenom= ? , specialite= ? ,lienPhoto= ?, lienLinkedIn= ? , lienMail= ? , lienFacebook= ? where idEquipe = ?'
        const [rows, fields]= await pool.query(sql,[nom,prenom,specialite,lienLinkedIn,lienMail,lienFacebook,id])
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
deleteEquipe: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete equipe where idEquipe = ?' ,[id])
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

module.exports = equipeController
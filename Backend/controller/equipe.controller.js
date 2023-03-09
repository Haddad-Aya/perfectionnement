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
        const { idEquipe } = req.params
        const [rows, fields]= await pool.query("select * from equipe where idEquipe = ?", [idEquipe])
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
        const {nom,prenom,specialite,lienPhoto,lienLinkedIn,lienEmail,lienFacebook} = req.body
        const sql= 'INSERT INTO equipe (nom,prenom,specialite,lienPhoto,lienLinkedIn,lienEmail,lienFacebook) value (?,?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,specialite,lienPhoto,lienLinkedIn,lienEmail,lienFacebook])
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
        const { nom,prenom,specialite,lienPhoto,lienLinkedIn,lienEmail,lienFacebook } = req.body
        const {idEquipe} = req.params
        const sql= 'update equipe set  nom= ? , prenom= ? , specialite= ? ,lienPhoto= ?, lienLinkedIn= ? , lienEmail= ? , lienFacebook= ? where idEquipe = ?'
        const [rows, fields]= await pool.query(sql,[nom,prenom,specialite,lienPhoto,lienLinkedIn,lienEmail,lienFacebook,idEquipe])
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
        const {idEquipe} = req.params
        const [rows, fields]= await pool.query('delete from equipe where idEquipe = ?' ,[idEquipe])
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
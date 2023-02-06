const pool = require("../database/index")
const envoiemailController = {
getAllEnvoiEmail: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from envoiemail")
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
getByIdEnvoiEmail: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from envoiemail where idEnvoiemail = ?", [id])
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
createEnvoiEmail: async(req, res)=>{
    try{
        const {contenu,lienVersLeSite,idLesqEmail} = req.body
        const sql= 'INSERT INTO envoiemail (contenu,lienVersLeSite,idLesqEmail) value (?,?,?)'
        const [rows, fields]= await pool.query(sql, [contenu,lienVersLeSite,idLesqEmail])
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
updateEnvoiEmail: async(req, res)=>{
    try{
        const { contenu,lienVersLeSite,idLesqEmail } = req.body
        const {id} = req.params
        const sql= 'update envoiemail set  contenu= ? , lienVersLeSite= ? , idLesqEmail= ? where idEnvoiemail = ?'
        const [rows, fields]= await pool.query(sql,[contenu,lienVersLeSite,idLesqEmail,id])
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
deleteEnvoiEmail: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete envoiemail where idEnvoiemail = ?' ,[id])
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

module.exports = envoiemailController
const pool = require("../database/index")
const contactController = {
getAllContact: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from contact")
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
getByIdContact: async(req, res)=>{
    try{
        const { idContact } = req.params
        const [rows, fields]= await pool.query("select * from contact where idContact = ?", [idContact])
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
createContact: async(req, res)=>{
    try{
        const {nom,prenom,email,sujet,message} = req.body
        const sql= 'INSERT INTO contact (nom,prenom,email,sujet,message) value (?,?,?,?,?)'
        const [rows]= await pool.query(sql, [nom,prenom,email,sujet,message])
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
updateContact: async(req, res)=>{
    try{
        const { nom,prenom,email,sujet,message } = req.body
        const {idContact} = req.params
        const sql= 'update contact set nom = ? , prenom= ? , email= ? , sujet= ? ,message= ?  where idContact = ?'
        const [rows, fields]= await pool.query(sql,[nom,prenom,email,sujet,message,idContact])
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
deleteContact: async(req, res)=>{
    try{
        const {idContact} = req.params
        const sql='delete from contact where idContact = ?'
        const [rows, fields]= await pool.query(sql ,[idContact])
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

module.exports = contactController
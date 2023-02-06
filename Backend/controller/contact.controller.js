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
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from contact where idContact = ?", [id])
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
        const {nom,prenom,email,nomEnreprise,sujet,message} = req.body
        const sql= 'INSERT INTO contact (nom,prenom,email,nomEnreprise,sujet,message) value (?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,email,nomEnreprise,sujet,message])
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
        const { nom,prenom,email,nomEnreprise,sujet,message } = req.body
        const {id} = req.params
        const sql= 'update contact set nom = ? , prenom= ? , email= ? , sujet= ? , nomEnreprise= ? where idContact = ?'
        const [rows, fields]= await pool.query(sql,[nom,prenom,email,nomEnreprise,sujet,message,id])
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
        const id = req.params
        const [rows, fields]= await pool.query('delete contact where idContact = ?' ,[id])
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
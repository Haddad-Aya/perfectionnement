const pool = require("../database/index")
const lesemailsController = {
getAllLesEmail: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from lesemails")
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
getByIdLesEmail: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from lesemails where idLesemails = ?", [id])
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
createLesEmail: async(req, res)=>{
    try{
        const {email} = req.body
        const sql= 'INSERT INTO lesemails (email) value (?)'
        const [rows, fields]= await pool.query(sql, [email])
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
updateLesEmail: async(req, res)=>{
    try{
        const { email } = req.body
        const {id} = req.params
        const sql= 'update lesemails set  email= ? where idLesemails = ?'
        const [rows, fields]= await pool.query(sql,[email,id])
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
deleteLesEmail: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete lesemails where id = ?' ,[id])
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

module.exports = lesemailsController
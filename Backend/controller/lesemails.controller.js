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
        const [rows, fields]= await pool.query("select * from lesemails where idEmail = ?", [id])
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
        const sql= 'update lesemails set  email= ? where idEmail = ?'
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
deleteEmail: async(req, res)=>{
    try{
        const {idEmail} = req.params
        const sql = 'delete from lesemails where idEmail = ?'
        const [rows, fields]= await pool.query(sql,[idEmail])
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
const pool = require("../database/index")
const adminController = {
getAllAdmin: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from admin")
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
getByIdAdmin: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from admin where idAdmin = ?", [id])
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
createAdmin: async(req, res)=>{
    try{
        const {nom,prenom,email,motDePasse} = req.body
        const sql= 'INSERT INTO admin (nom,prenom,email,motDePasse) value (?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [nom,prenom,email,motDePasse])
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
updateAdmin: async(req, res)=>{
    try{
        const { nom,prenom,email,motDePasse } = req.body
        const {id} = req.params
        const sql= 'update admin set  nom= ? , prenom= ? , email= ? , motDePasse= ? , = ? , = ? where idAdmin = ?'
        const [rows, fields]= await pool.query(sql,[nom,prenom,email,motDePasse,id])
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
deleteAdmin: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete admin where idAdmin = ?' ,[id])
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

module.exports = adminController
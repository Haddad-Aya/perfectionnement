const pool = require("../database/index")
const stockController = {
getAllStock: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from stock")
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
getByIdStock: async(req, res)=>{
    try{
        const { id } = req.params
        const [rows, fields]= await pool.query("select * from stock where idStock = ?", [id])
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
createStock: async(req, res)=>{
    try{
        const {quantite,idProduit} = req.body
        const sql= 'INSERT INTO stock (quantite,idProduit) value (?,?,?,?,?,?)'
        const [rows, fields]= await pool.query(sql, [quantite,idProduit])
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
updateStock: async(req, res)=>{
    try{
        const { quantite,idProduit } = req.body
        const {id} = req.params
        const sql= 'update stock set  quantite= ? , idProduit= ? where idStock = ?'
        const [rows, fields]= await pool.query(sql,[quantite,idProduit,id])
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
deleteStock: async(req, res)=>{
    try{
        const id = req.params
        const [rows, fields]= await pool.query('delete stock where idStock = ?' ,[id])
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

module.exports = stockController
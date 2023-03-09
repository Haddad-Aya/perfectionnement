const pool = require("../database/index")
const commandeController = {
getAllCommande: async(req, res) => {
    try{
        const [rows, fields]= await pool.query("select * from commande")
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
getByIdCommande: async(req, res)=>{
    try{
        const { idCommande } = req.params
        const [rows, fields]= await pool.query("select * from commande where idCommande = ?", [idCommande])
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
getByIdClient: async(req, res)=>{
    try{
        const { idClient } = req.params
        const [rows, fields]= await pool.query("select quantite from commande where idClient = ?", [idClient])
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
createCommande: async(req, res)=>{
    try{
        const {dateCommande,idClient,prixTotal} = req.body
        const sql= 'INSERT INTO commande (dateCommande,idClient,prixTotal) value (?,?,?)'
        const [rows, fields]= await pool.query(sql, [dateCommande,idClient,prixTotal])
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
updateCommande: async(req, res)=>{
    try{
        const {dateCommande,idClient,prixTotal} = req.body
        const {idCommande} = req.params
        const sql= 'update commande set  dateCommande= ? , idClient= ?, prixTotal= ?  where idCommande = ?'
        const [rows, fields]= await pool.query(sql,[dateCommande,idClient,prixTotal,idCommande])
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
deleteCommande: async(req, res)=>{
    try{
        const {idCommande} = req.params
        const [rows, fields]= await pool.query('delete from commande where idCommande = ?' ,[idCommande])
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
nombreCommande: async(req, res)=>{
    try{
        
        const [rows, fields]= await pool.query("select idClient,count(*) 'nbreCommande' from commande group by idClient")
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
dateCommandeByIdClient: async(req, res)=>{
    const {idClient} = req.params
    try{
        const [rows, fields]= await pool.query("select dateCommande from commande where idClient=? limit 1",[idClient])
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
commande: async(req, res)=>{
    try{
        const [rows, fields]= await pool.query("select c.idCommande, c.dateCommande, c.idClient,u.nom,u.prenom,u.email,u.telephone , c.prixTotal , d.idProduit , d.quantite , p.nomCategorie , p.nom 'nomProduit', a.adresseClient, a.ville, a.codePostale, a.pays from commande c , detailCommande d , produit p , adresse a , utilisateur u where c.idCommande = d.idCommande and d.idProduit = p.idProduit and c.idCommande = a.idCommande and c.idClient = u.idUtilisateur")
        res.json({
            data: rows
        })

        
    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })

    } 
}

}

module.exports = commandeController
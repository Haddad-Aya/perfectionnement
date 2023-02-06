const express=require('express');
const app=express();
const cors=require('cors')

require('dotenv').config()
const clientRouter =require('./routes/client.router')
const produitRouter =require('./routes/produit.router')
const adminRouter =require('./routes/admin.router')
const blogRouter =require('./routes/blog.router')
const commandeRouter =require('./routes/commande.router')
const contactRouter =require('./routes/contact.router')
const envoiemailRouter =require('./routes/envoiemail.router')
const equipeRouter =require('./routes/equipe.router')
const partenaireRouter =require('./routes/partenaire.router')
const stockRouter =require('./routes/stock.router')
const categorieRouter =require('./routes/categorie.router')
const lesemailsRouter =require('./routes/lesemails.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use("/api/client", clientRouter)
app.use("/api/produit", produitRouter)
app.use("/api/admin", adminRouter)
app.use("/api/blog", blogRouter)
app.use("/api/commande", commandeRouter)
app.use("/api/contact", contactRouter)
app.use("/api/envoiemail", envoiemailRouter)
app.use("/api/equipe", equipeRouter)
app.use("/api/partenaire", partenaireRouter)
app.use("/api/stock", stockRouter)
app.use("/api/categorie", categorieRouter)
app.use("/api/lesEmail", lesemailsRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Vous etes connecter')
});
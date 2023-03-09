const express=require('express');
const app=express();
const cors=require('cors');
const nodemailer=require('nodemailer');
const bodyParser = require('body-parser');
const errorController = require('./controller/error')

app.use(bodyParser.json());
require('dotenv').config()

const utilisateurRouter =require('./routes/utilisateur.router')
const produitRouter =require('./routes/produit.router')
const blogRouter =require('./routes/blog.router')
const commandeRouter =require('./routes/commande.router')
const contactRouter =require('./routes/contact.router')
const equipeRouter =require('./routes/equipe.router')
const partenaireRouter =require('./routes/partenaire.router')
const adresseRouter =require('./routes/adresse.router')
const categorieRouter =require('./routes/categorie.router')
const lesemailsRouter =require('./routes/lesemails.router')
const envoiMailRouter =require('./routes/envoiMail.router')
const detailCommandeRouter =require('./routes/detailCommande.router')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS, PUT');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Autorization");
   next();
  });
 /* async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ayyouta.aya.had@gmail.com",
        pass:"nlsrcdpqvvrrcxkl" 
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '<ayyouta.aya.had@gmail.com>', // sender address
      to: "", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

  }
  
  main().catch(console.error);
/*let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "ayyouta.aya.had@gmail.com",
        pass:"nlsrcdpqvvrrcxkl"
    }
})
let details = {
    from: "ayyouta.aya.had@gmail.com",
    to: "haddadaya.aya@gmail.com" ,
    subject:"tester l'envoie des emails",
    text:"bienvenue à africa medical gate"
}
mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("famma erreeeeuur",err)
    }
    else{
        console.log("sahitii mail bien envoyer")
    }
}) */
app.use("/api/utilisateur", utilisateurRouter)
app.use("/api/produit", produitRouter)
app.use("/api/blog", blogRouter)
app.use("/api/commande", commandeRouter)
app.use("/api/contact", contactRouter)
app.use("/api/equipe", equipeRouter)
app.use("/api/partenaire", partenaireRouter)
app.use("/api/adresse", adresseRouter)
app.use("/api/categorie", categorieRouter)
app.use("/api/lesEmail", lesemailsRouter)
app.use("/api/email", envoiMailRouter)
app.use("/api/detailCommande", detailCommandeRouter)

app.use(errorController.get404)
app.use(errorController.get500)
//MYSQL
//LISTEN ON PORT 3000
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Vous etes connecter')
});
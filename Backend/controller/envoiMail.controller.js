const pool = require("../database/index")
const nodemailer=require('nodemailer');
const produitController = {

demaindePartenaire: async(req, res) => {
    let entreprise = req.body
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "ayyouta.aya.had@gmail.com",
            pass:"nlsrcdpqvvrrcxkl"
        }
    })
    let details = {
        from: "ayyouta.aya.had@gmail.com",
        to: "haddadaya.aya@gmail.com" ,
        subject:"Demande de partenaria",
        html: "<b>Vous avez réçue une nouvelle demande de partenariat. Vous pouvez trouver les détails sur votre espace</b>"
    }
    mailTransporter.sendMail(details,(err)=>{
        if(err){
            console.log("famma erreeeeuur",err)
        }
        else{
            console.log("sahitii mail bien envoyer")
        }
    })


},
commandeEnvoyer: async(req, res) => {
    let commande = req.body
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "ayyouta.aya.had@gmail.com",
            pass:"nlsrcdpqvvrrcxkl"
        }
    })
    let details = {
        from: "ayyouta.aya.had@gmail.com",
        to: "haddadaya.aya@gmail.com" ,
        subject:"Commande",
        html: "<b>Vous avez une commande . Vous devrez la confirmer</b>"
    }
    mailTransporter.sendMail(details,(err)=>{
        if(err){
            console.log("famma erreeeeuur",err)
        }
        else{
            console.log("sahitii mail bien envoyer")
        }
    })


},
contactEnvoyer: async(req, res) => {
    let contact = req.body
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "ayyouta.aya.had@gmail.com",
            pass:"nlsrcdpqvvrrcxkl"
        }
    })
    let details = {
        from: "ayyouta.aya.had@gmail.com",
        to: "haddadaya.aya@gmail.com" ,
        subject:"Contact",
        html: "<b>Un nouveau visiteur qui veut vous contacter</b>"
    }
    mailTransporter.sendMail(details,(err)=>{
        if(err){
            console.log("famma erreeeeuur",err)
        }
        else{
            console.log("sahitii mail bien envoyer")
        }
    })


}
}

module.exports = produitController
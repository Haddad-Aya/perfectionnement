const Utilisateur=require('../models/utilisateur')
const express = require('express');
const router = express.Router();
const {check} = require('express-validator')

const utilisateurController = require("../controller/utilisateur.controller")

router.post("/signup",[
    check('nom').trim().not().isEmpty(),
    check('prenom').trim().not().isEmpty(),
    check('email')
    .isEmail()
    .withMessage('taper un mail ')
    .custom(async (email) => {
        const utilisateur = await Utilisateur.find(email);
        if(utilisateur[0].length > 0){
            return Promise.reject('email est deja exister');
        }
    })
    .normalizeEmail(),
    check('telephone').trim().not(),
    check('role').not().trim().isEmpty(),
    check('motDePasse').trim().isLength({ min: 7}),
    check('photoAdmin').trim().not().isEmpty()

],utilisateurController.enregistrer);
router.get("/getByMail/:email",utilisateurController.getByMail);
router.post("/login",utilisateurController.login);
router.get("/getClient",utilisateurController.getClient);
router.get("/getAdmin",utilisateurController.getAdmin);
router.get("/getById/:idUtilisateur",utilisateurController.getById);
router.get("/getByIdAdmin/:idUtilisateur",utilisateurController.getByIdAdmin);
router.delete("/deleteUtilisateur/:idUtilisateur",utilisateurController.deleteUtilisateur);
router.put("/updateUtilisateur/:idUtilisateur",utilisateurController.updateUtilisateur);

module.exports = router
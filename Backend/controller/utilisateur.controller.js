/*const pool = require("../database/index")
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const kleSecret = "qtbl5pm0ert7cghsjj$ù98xw<&f$p@hbn,(mm"


//const utilisateur = require("../models/utilisateur")
const utilisateurController = {
    getAllUtilisateur: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from utilisateur")
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
    getByIdUtilisateur: async (req, res) => {
        try {
            const { idUtilisateur } = req.params
            const [rows, fields] = await pool.query("select * from utilisateur where idUtilisateur = ?", [idUtilisateur])
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
    login: async (req, res, next) => {*/

/*  const { email, motDePasse } = req.body
  await pool.query("select * from utilisateur where email = ? ", [email])
  .then(exist=> {
      if(exist && exist.idUtilisateur){
          bcrypt.compare(motDePasse, exist.motDePasse , function(err , response) {
              if(!err){
                  if(response){
                    const authToken = jwt.sign({idUtilisateur : exist.idUtilisateur , email : exist.email} , kleSecret,{
                          expiresIn:'3h'
                      })
                      res.json({status:'ok' , authToken , data: {authToken , response, exist}})
                  }
              }
          }
          )
      }
  }).catch(err =>{
      res.json({status : 'erreur',data:"erreur quelque part"})
  })
*/
/*pool.query("select * from utilisateur where email = ? ", [req.body.email]),
(err, result) => {
if (result.length) {
return res.status(409).send({
msg: 'This user is already in use!'
});
}
        
    }
},

    createUtilisateur: async (req, res) => {
        const enregistrerUtilisateur = {
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            telephone: req.body.telephone,
            role: req.body.role,
            motDePasse: req.body.motDePasse,
            photoAdmin:req.body.photoAdmin
        }
        const salt = await bcrypt.genSalt(10)
        await bcrypt.hash(req.body.motDePasse, salt).then(hashedMdp => {
            if (hashedMdp) {
                console.log('mot de passe utilisateur aprés son cryptage: ', hashedMdp)
                enregistrerUtilisateur.motDePasse = hashedMdp
            }
        })

        try {
            const sql = 'INSERT INTO utilisateur (nom, prenom, email,telephone,role,motDePasse,photoAdmin) value (?,?,?,?,?,?,?)'
            const [rows, fields] = await pool.query(sql, [enregistrerUtilisateur.nom, enregistrerUtilisateur.prenom, enregistrerUtilisateur.email, enregistrerUtilisateur.telephone, enregistrerUtilisateur.role, enregistrerUtilisateur.motDePasse, enregistrerUtilisateur.photoAdmin])
            res.json({data: rows})
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }

    },
    updateUtilisateur: async (req, res) => {
        try {
            const { nom, prenom, email, telephone, role, motDePasse } = req.body
            const { idUtilisateur } = req.params
            const sql = 'update utilisateur set nom = ? ,prenom = ? ,email = ? ,telephone = ?,role = ?,motDePasse=?  where idUtilisateur = ?'
            const [rows, fields] = await pool.query(sql, [nom, prenom, email, telephone, role, motDePasse, idUtilisateur])
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
    deleteUtilisateur: async (req, res) => {
        try {
            const idUtilisateur = req.params
            const [rows, fields] = await pool.query('delete utilisateur where idUtilisateur = ?', [idUtilisateur])
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

module.exports = utilisateurController

/*
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const { response } = require("express")
const kleSecret = "qtbl5pm0ert7cghsjj$ù98xw<&f$p@hbn,(mm"

const db = require('../models')
const utilisateur=db.utilisateurs

const utilisateurController = {
    createUtilisateur : async (req, res) => {
        const enregistrerUtilisateur = {
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            telephone: req.body.telephone,
            role: req.body.role,
            motDePasse: req.body.motDePasse
        }


        await utilisateur.create(enregistrerUtilisateur).then(userStored =>{
            if(userStored && user.idUtilisateur){
                console.log("user stored data", userStored)
                res.json({status:'ok',data:userStored})
            }
        }).catch(err =>{
            res.json({status:'erreur ye semhaaa', data : err})
        })
        

    }

}

module.exports = utilisateurController
*/
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const Utilisateur = require('../models/utilisateur');
const jwt = require('jsonwebtoken');
const pool = require("../database/index")
const kleSecret = "qtbl5pm0ert7cghsjj$ù98xw<&f$p@hbn,(mm"
const utilisateurController = {
    enregistrer: async (req, res, next) => {
        const enregistrerUtilisateur = {
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            telephone: req.body.telephone,
            role: req.body.role,
            motDePasse: req.body.motDePasse,
            photoAdmin: req.body.photoAdmin
        }
        const salt = await bcrypt.genSalt(10)
        await bcrypt.hash(req.body.motDePasse, salt).then(hashedMdp => {
            if (hashedMdp) {
                console.log('mot de passe utilisateur aprés son cryptage: ', hashedMdp)
                enregistrerUtilisateur.motDePasse = hashedMdp
            }
        })

        const sql = ("select * from utilisateur where email = ?")
        const [rows, fields] = await pool.query(sql, [enregistrerUtilisateur.email])

        if (rows.length > 0) {
            console.log("email deja exister ")
        }


        else {
            try {
                const sql = 'INSERT INTO utilisateur (nom, prenom, email,telephone,role,motDePasse,photoAdmin) value (?,?,?,?,?,?,?)'
                const [rows, fields] = await pool.query(sql, [enregistrerUtilisateur.nom, enregistrerUtilisateur.prenom, enregistrerUtilisateur.email, enregistrerUtilisateur.telephone, enregistrerUtilisateur.role, enregistrerUtilisateur.motDePasse, enregistrerUtilisateur.photoAdmin])
                res.json({ data: rows })
            } catch (error) {
                console.log(error)
                res.json({
                    status: "error"
                })
            }
        }

    },
    getByMail: async (req, res) => {
        try {
            const { email } = req.params
            const [rows, fields] = await pool.query("select * from utilisateur where email = ?", [email])
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
    getById: async (req, res) => {
        try {
            const { idUtilisateur } = req.params
            const [rows, fields] = await pool.query("select * from utilisateur where idUtilisateur = ?", [idUtilisateur])
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
    login: async (req, res) => {
        const email = req.body.email;
        const motDePasse = req.body.motDePasse;
        try {
            const sql = ("select * from utilisateur where email = ?")
            const [rows, fields] = await pool.query(sql, [email])
            const stockerUtilisateur = rows;
            console.log(rows)
            console.log(stockerUtilisateur)
            const i = rows.length
            console.log(i)
            if (i != 1) {
                const error = new Error('utilisateur non trouver')
                error.statusCose = 401;
                throw error
            }

            const equal = await bcrypt.compare(motDePasse, stockerUtilisateur[0].motDePasse)

            if (!equal) {
                const error = new Error('wrong password!');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({ email: stockerUtilisateur[0].email, idUtilisateur: stockerUtilisateur[0].idUtilisateur }, kleSecret, { expiresIn: '1h' });
            console.log(token)
            res.status(200).json({ token: token, idUtilisateur: stockerUtilisateur[0].idUtilisateur, role: stockerUtilisateur[0].role })

        } catch (err) {
            console.log(err)
            if (!err.statusCode) {
                err.statusCode = 500;
            }
        }
    },
    getClient: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from utilisateur where role = 'utilisateur'")
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
    updateUtilisateur: async (req, res) => {
        try {
            const { nom, prenom, email, telephone } = req.body
            const { idUtilisateur } = req.params
            const sql = 'update utilisateur set nom = ? ,prenom = ? ,email = ? ,telephone = ? where idUtilisateur = ?'
            const [rows, fields] = await pool.query(sql, [nom, prenom, email, telephone, idUtilisateur])
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
    deleteUtilisateur: async (req, res) => {
        try {
            const { idUtilisateur } = req.params
            const [rows, fields] = await pool.query('delete from utilisateur where idUtilisateur = ?', [idUtilisateur])
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
    getAdmin: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from utilisateur where role = 'admin'")
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
    getByIdAdmin: async (req, res) => {
        try {
            const { idUtilisateur } = req.params
            const [rows, fields] = await pool.query("select * from utilisateur where idUtilisateur = ?", [idUtilisateur])
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
module.exports = utilisateurController
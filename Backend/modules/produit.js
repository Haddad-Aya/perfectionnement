const mysql = require('mysql2');

const produit = mysql.model('produit',{
    urlImage: {
        type: String
    },
    etat: {
        type: String
    },
    description: {
        type: String
    },
    nom: {
        type: String
    },
    prix: {
        type: Float
    }
})
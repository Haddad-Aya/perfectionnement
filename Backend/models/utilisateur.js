module.exports = class Utilisateur {
    constructor(nom,prenom,email,telephone,role,motDePasse,photoAdmin){
        this.nom=nom
        this.prenom=prenom
        this.email=email
        this.telephone=telephone
        this.role=role
        this.motDePasse=motDePasse
        this.photoAdmin=photoAdmin
    }

}
/*
const dbConfig = require('../database/index.js')
const {Sequelize, DataTypes}=require('sequelize');

const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool:{
            max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
        }
    }

)
sequelize.authenticate()
.then(() => {
console.log('connected')
}).catch(err =>{
    console.log('error' + err)
})
const db = {}

dbConfig.Sequelize = Sequelize
dbConfig.sequelize = sequelize

db.utilisateurs = require('./utilisateur.js')(sequelize, DataTypes);




module.exports = db
*/
import {Sequelize} from "sequelize";
 
const db = new Sequelize('<dbname>','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
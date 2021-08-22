import { Sequelize } from "sequelize";
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User];

class Database{
    constructor(){
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
            host: databaseConfig.host,
            // @ts-ignore
            dialect: databaseConfig.dialect
        });
        models.map( model => model.config(this.connection))
    }
}

export default new Database();
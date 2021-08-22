import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static config(sequelize) {
        // @ts-ignore
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            passwordHash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        },{
            sequelize,
        })
    }
}

export default User;
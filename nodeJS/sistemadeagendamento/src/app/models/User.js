import Sequelize, { Model } from 'sequelize';

// @ts-ignore
class User extends Model {
    static init(sequelize) {
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
const {Model, DataTypes} = require('sequelize')
class Livro extends Model {
    static init(sequelize){
        super.init({
            livro_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            disponivel: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            setor: {
                type: DataTypes.STRING,
                allowNull: false
            },
            genero: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize
        })
    }
}

module.exports = Livro;
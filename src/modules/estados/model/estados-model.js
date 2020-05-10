'use strict'

module.exports = (sequelize, DataTypes) => {

    const Estados = sequelize.define('Estados', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        sigla: {
            type: DataTypes.STRING,
            field: 'sigla'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        status: {
            type: DataTypes.BOOLEAN,
            field: 'status'
        }

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'estados',
        timestamps: false,

    })
    Estados.associate = function (models) {        
        Estados.belongsToMany(models.Registros, {
            through: 'registros',
            foreignKey: 'idestado'            
        });
        Estados.belongsToMany(models.Cidades, {
            through: 'cidades',
            foreignKey: 'idestados'            
        });
    }

    return Estados

}
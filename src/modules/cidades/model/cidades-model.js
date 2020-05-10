'use strict'

module.exports = (sequelize, DataTypes) => {

    const Cidades = sequelize.define('Cidades', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        codibge: {
            type: DataTypes.STRING,
            field: 'codibge'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        idestados: {
            type: DataTypes.INTEGER,
            field: 'idestados',
            references: {
                model: 'Estados',
                key: 'id'
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            field: 'status'
        }

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'cidades',
        timestamps: false,

    })
    Cidades.associate = function (models) {      
        Cidades.belongsTo(models.Estados, {targetKey: 'id', foreignKey: 'idestados' })
        Cidades.belongsToMany(models.Registros, {
            through: 'registros',
            foreignKey: 'idcidade'
        });
    }

    return Cidades

}
'use strict'

module.exports = (sequelize, DataTypes) => {

    const Credenciadosgrupos = sequelize.define('Credenciadosgrupos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        idregistro: {
            type: DataTypes.INTEGER,
            field: 'idregistro'
        },
        idgrupo: {
            type: DataTypes.INTEGER,
            field: 'idgrupo'
        },
        idsubgrupo: {
            type: DataTypes.INTEGER,
            field: 'idsubgrupo'
        },
        situacao: {
            type: DataTypes.BOOLEAN,
            field: 'situacao'
        },
        idespecialidade: {
            type: DataTypes.INTEGER,
            field: 'idespecialidade'
        },

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'credenciadosgrupos',
        timestamps: false,

    })
    // Tabelaprecos.associate = function (models) {      
    //     Tabelaprecos.belongsTo(models.Estados, {targetKey: 'id', foreignKey: 'idestados' })
    //     Tabelaprecos.belongsToMany(models.Registros, {
    //         through: 'registros',
    //         foreignKey: 'idcidade'
    //     });
    // }

    return Credenciadosgrupos

}
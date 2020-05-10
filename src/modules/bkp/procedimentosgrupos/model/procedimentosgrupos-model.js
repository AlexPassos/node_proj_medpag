'use strict'

module.exports = (sequelize, DataTypes) => {

    const Procedimentosgrupos = sequelize.define('Procedimentosgrupos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        descricao: {
            type: DataTypes.STRING,
            field: 'descricao'
        },
        subgrupo: {
            type: DataTypes.BOOLEAN,
            field: 'subgrupo'
        },
        habilitado: {
            type: DataTypes.BOOLEAN,
            field: 'habilitado'
        },
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'procedimentosgrupos',
        timestamps: false,

    })
    // Setores.associate = function (models) {        
    //     Setores.belongsToMany(models.Produto, {
    //         through: 'produto',
    //         foreignKey: 'id_setor'            
    //     });

    // }

    return Procedimentosgrupos

}
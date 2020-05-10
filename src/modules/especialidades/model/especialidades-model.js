'use strict'

module.exports = (sequelize, DataTypes) => {

    const Especialidades = sequelize.define('Especialidades', {
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

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'especialidades',
        timestamps: false,

    })
    // Setores.associate = function (models) {        
    //     Setores.belongsToMany(models.Produto, {
    //         through: 'produto',
    //         foreignKey: 'id_setor'            
    //     });

    // }

    return Especialidades

}
'use strict'

module.exports = (sequelize, DataTypes) => {

    const Credenciadosprocedimentos = sequelize.define('Credenciadosprocedimentos', {
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
        idprocedimento: {
            type: DataTypes.INTEGER,
            field: 'idprocedimento'
        },
        idespecialidade: {
            type: DataTypes.INTEGER,
            field: 'idespecialidade'
        },
        situacao: {
            type: DataTypes.BOOLEAN,
            field: 'situacao'
        }

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'credenciadosprocedimentos',
        timestamps: false,

    })
    // Tabelaprecos.associate = function (models) {      
    //     Tabelaprecos.belongsTo(models.Estados, {targetKey: 'id', foreignKey: 'idestados' })
    //     Tabelaprecos.belongsToMany(models.Registros, {
    //         through: 'registros',
    //         foreignKey: 'idcidade'
    //     });
    // }

    return Credenciadosprocedimentos

}
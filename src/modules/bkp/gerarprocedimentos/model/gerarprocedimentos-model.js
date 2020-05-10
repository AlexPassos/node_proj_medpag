'use strict'

module.exports = (sequelize, DataTypes) => {

    const Tabelaprecos = sequelize.define('Tabelaprecos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
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
        valor: {
            type: DataTypes.DECIMAL(18,2),
            field: 'valor'
        },
        idespecialidade: {
            type: DataTypes.INTEGER,
            field: 'idespecialidade'
        },
        valorprofissional: {
            type: DataTypes.DECIMAL(18,2),
            field: 'valorprofissional'
        },
        habilitado: {
            type: DataTypes.BOOLEAN,
            field: 'habilitado'
        }

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'tabelaprecos',
        timestamps: false,

    })
    // Tabelaprecos.associate = function (models) {      
    //     Tabelaprecos.belongsTo(models.Estados, {targetKey: 'id', foreignKey: 'idestados' })
    //     Tabelaprecos.belongsToMany(models.Registros, {
    //         through: 'registros',
    //         foreignKey: 'idcidade'
    //     });
    // }

    return Tabelaprecos

}
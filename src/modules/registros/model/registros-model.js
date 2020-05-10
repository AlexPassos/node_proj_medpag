'use strict'

module.exports = (sequelize, DataTypes) => {

    const Registros = sequelize.define('Registros', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        cpfcnpj: {
            type: DataTypes.STRING,
            field: 'cpfcnpj'
        },
        rgie: {
            type: DataTypes.STRING,
            field: 'rgie'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        telefone: {
            type: DataTypes.STRING,
            field: 'telefone'
        },
        celular: {
            type: DataTypes.STRING,
            field: 'celular'
        },
        nascimento: {
            type: DataTypes.DATE,
            field: 'nascimento'
        },
        sexo: {
            type: DataTypes.INTEGER,
            field: 'sexo'
        },
        cep: {
            type: DataTypes.STRING,
            field: 'cep'
        },
        endereco: {
            type: DataTypes.STRING,
            field: 'endereco'
        },
        numero: {
            type: DataTypes.STRING,
            field: 'numero'
        },
        complemento: {
            type: DataTypes.STRING,
            field: 'complemento'
        },
        bairro: {
            type: DataTypes.STRING,
            field: 'bairro'
        },
        idcidade: {
            type: DataTypes.INTEGER,
            field: 'idcidade',
            references: {
                model: 'Cidades',
                key: 'id'
            }
        },
        idestado: {
            type: DataTypes.INTEGER,
            field: 'idestado',
            references: {
                model: 'Estados',
                key: 'id'
            }
        },
        senha: {
            type: DataTypes.STRING,
            field: 'senha'
        },
        login: {
            type: DataTypes.STRING,
            field: 'login'
        },
        anjo: {
            type: DataTypes.BOOLEAN,
            field: 'anjo'
        },
        pj: {
            type: DataTypes.INTEGER,
            field: 'pj'
        },
        auth: {
            type: DataTypes.INTEGER,
            field: 'auth'
        },
        horariofuncionamento: {
            type: DataTypes.TEXT,
            field: 'horariofuncionamento'
        },
        horariocoleta: {
            type: DataTypes.TEXT,
            field: 'horariocoleta'
        },
        crm: {
            type: DataTypes.STRING,
            field: 'crm'
        },
        situacao: {
            type: DataTypes.BOOLEAN,
            field: 'situacao'
        },
        senhaeletronica: {
            type: DataTypes.STRING,
            field: 'senhaeletronica'
        },
        responsavel: {
            type: DataTypes.STRING,
            field: 'responsavel'
        },
        cpfresponsavel: {
            type: DataTypes.STRING,
            field: 'cpfresponsavel'
        },
        cnpj: {
            type: DataTypes.STRING,
            field: 'cnpj'
        },
        acesso: {
            type: DataTypes.INTEGER,
            field: 'acesso'
        },
        nascresponsavel: {
            type: DataTypes.DATE,
            field: 'nascresponsavel'
        },
        rgresponsavel: {
            type: DataTypes.STRING,
            field: 'rgresponsavel'
        },
        socio: {
            type: DataTypes.STRING,
            field: 'socio'
        },
        cpfsocio: {
            type: DataTypes.STRING,
            field: 'cpfsocio'
        },
        rgsocio: {
            type: DataTypes.STRING,
            field: 'rgsocio'
        },
        nascsocio: {
            type: DataTypes.DATE,
            field: 'nascsocio'
        },
        pasta: {
            type: DataTypes.STRING,
            field: 'pasta'
        },
        apelido: {
            type: DataTypes.STRING,
            field: 'apelido'
        },
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'registros',
        timestamps: false,

    })
    Registros.associate = function (model) {        
        Registros.belongsTo(model.Estados, {targetKey: 'id', foreignKey: 'idestado' })
        Registros.belongsTo(model.Cidades, {targetKey: 'id', foreignKey: 'idcidade' })
    }

    return Registros

}
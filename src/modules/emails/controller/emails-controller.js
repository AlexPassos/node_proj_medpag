'use strict'

const emailService = require('../../../services/email-service');

exports.postEmailRecuperacao = (req, res) => {
    try {

        const { nome, senha, email } = req.body;

        var titulo = 'Recuperação de senha';

        var corpo = `Você solicitou a recuperação da sua senha!
        <br/><br/>
        Senha cadastrada é: <strong>${senha}</strong>`;

        var emailBody = montaEmail(titulo, nome, corpo);
        
        let assunto = 'Recuperação de senha Medpag';

        emailService.enviarEmail(email, assunto,  corpo, emailBody);

        res.status(201).send(
            'E-mail enviado com sucesso'
        );

    } catch (e) {
        res.status(400).send('Erro ao enviar');
    }
};

exports.postEmailBoleto = (req, res) => {
    try {

        const { nome, link, codigo, email } = req.body;

        var titulo = 'Boleto para depósito na sua conta do Medpag';

        var corpo = `Segue o link do boleto que você solicitou para depositar dinheiro na sua 
        conta e o pagamento dele pode levar até 3 dias úteis 
        para ser reconhecido. Para um reconhecimento mais rápido, 
        você pode colocar dinheiro na sua conta via cartão de crédito.
        <br/><br/>
        <center>Código de barras:</center>
        <br/>
        <center><div style="font-size: 20px; font-weight: bold;">${codigo}</div></center>
        <br/>
        <center><div style="color: #808080; font-size: 16px; font-weight: bold;">SELECIONE O CÓDIGO PARA COPIAR</div></center>
        <br/><br/>
        <center><a style="text-decoration: none; color: #fff;" href="${link}"><div style="width: 60%; background: #0098DA; padding: 15px;  border-radius: 50px; font-weight: bold; ">VISUALIZAR BOLETO</div></a></center>`;

        var emailBody = montaEmail(titulo, nome, corpo);

        emailService.send(
            email,
            'Boleto Medpag',
            global.EMAIL_TMPL.replace('{0}', emailBody));

        res.status(201).send({ message: 'E-mail enviado com sucesso' });

    } catch (e) {
        res.status(400).send({ message: 'Erro ao enviar', data: req.body });
    }
};

exports.postEmailConsulta = (req, res) => {
    try {

        const { nome, email } = req.body;

        var emailBody = `<img src="http://www.nsolucoesemti.com.br/medpag/logomedpag.png" 
                        alt="logo-medpag" height="52" width="200">
                    <br/><br/>
                    Olá, <strong>${nome}</strong>, 
                    você marcou uma consulta.
                    <br/><br/>
                   `;

        emailService.send(
            email,
            'Boleto Medpag',
            global.EMAIL_TMPL.replace('{0}', emailBody));

        res.status(201).send({ message: 'E-mail enviado com sucesso' });

    } catch (e) {
        res.status(400).send({ message: 'Erro ao enviar', data: req.body });
    }
};

exports.postEmailExame = (req, res) => {
    try {

        const { nome, email } = req.body;

        var emailBody = `<img src="http://www.nsolucoesemti.com.br/medpag/logomedpag.png" 
                        alt="logo-medpag" height="52" width="200">
                    <br/><br/>
                    Olá, <strong>${nome}</strong>, 
                    você marcou um exame.
                    <br/><br/>
                   `;

        emailService.send(
            email,
            'Boleto Medpag',
            global.EMAIL_TMPL.replace('{0}', emailBody));

        res.status(201).send({ message: 'E-mail enviado com sucesso' });

    } catch (e) {
        res.status(400).send({ message: 'Erro ao enviar', data: req.body });
    }
};

exports.postEmailTeste = async (req, res) => {
    try {

          let para = "alexpassos@nsolucoesemti.com.br";
          let assunto = 'Medpag teste';
          let bodyTexto = 'Formato texto...';
          let bodyHtml = '<b>Formato html...</b>';

          emailService.enviarEmail(para, assunto,  bodyTexto, bodyHtml);

        res.status(201).send({ message: 'E-mail enviado com sucesso' });

    } catch (e) {
        res.status(400).send({ message: 'Erro ao enviar', data: req.body });
    }
};

function montaEmail(titulo, nome, corpo) {

    var htmlTopo = `<div style="
            margin-top: 0;
            height: 50px;
            left: 50%;
            background: #020B2A;
            border-radius: 10px 10px 0px 0px;
            padding: 10px;
        ">
            <div style="
                left: 50%;
                position: absolute;
                transform: translateX(-50%);
                text-align: center;
            ">
                <img style="
                left: 50%;
                position: absolute;
                transform: translateX(-50%);
                " src="http://www.nsolucoesemti.com.br/medpag/emails/logomedpag.png" alt="logo-medpag" width="200" height="52"/>
            </div>  
        </div>`;

    var htmlTitulo = `<div style="
            padding: 25px;
            text-align: center;
            font-size: 25px;
            font-weight: bold;
            color: #020B2A;
        ">${titulo}
        </div>`;

    var htmlNome = `<div style="
            padding: 20px;
            text-align: center;
            font-size: 20px;    
            font-weight: bold;
        ">Olá, ${nome}
        </div>`;

    var htmlCorpo = `<div style="
            padding: 25px;
            text-align: center;
            font-size: 17px;    
        ">
           ${corpo}
        </div>`;

    var htmlEquipe = `<div style="
            margin-top: 20px;
            margin-bottom: 20px;     
        ">
            <div style="
                text-align: center;
                font-size: 14px;        
                color: #808080;
            ">Abraços,
            </div>
            <div style="
                text-align: center;
                font-size: 14px;        
                color: #808080;
            ">Equipe Medpag
            </div>
        </div>`;

    var htmlLinha = `<div style="
            width: 50%;
            height: auto;
            left: 50%;    
            margin: 0 auto;
            background: #fff;
            border: 1px solid #cccccc;
            border-radius: 10px 10px 10px 10px;
        ">
            ${htmlTopo}
            ${htmlTitulo}
            ${htmlNome}
            ${htmlCorpo}
            ${htmlEquipe}
        </div>`;

    var htmlBody = `<div 
        style="
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
    ">
        ${htmlLinha}
    </div>`;

    var html = `<!DOCTYPE html>
        <html>
            <head>
                <title>Medpag</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">                
            </head>
            <body>
               ${htmlBody}
            </body>
        </html>`;

    return html;

}
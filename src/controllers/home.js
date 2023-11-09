const chamado = require('../model/chamado');
const { Sequelize } = require('sequelize');

module.exports = {
    async carregarPagina(req,res){

        const chamados = await chamado.findAll({
            raw: true,
            attributes: ['Nome', 'Descricao', 'Tipo']
        });
        
        res.render('../views/index', {chamados})
    },

    async carregarFomrs(req,res){
        const dados = req.body.tipo;
        res.render('../views/novoChamado.ejs', {dados})
    },

    async addChamado(req,res){
        const dadoss = req.body


        await chamado.create({
            Nome: dadoss.nome,
            Descricao: dadoss.descricao,
            Tipo: dadoss.tipo
        });


        res.redirect('/')
    },

    async limpar(req,res)

    {

        const dados = req.body;

        await chamado.destroy(
            {
                truncate: true
            }
        );
        res.redirect('/');

    },



    
    
}
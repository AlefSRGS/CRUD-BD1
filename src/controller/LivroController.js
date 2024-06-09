const Livro = require('../models/Livro')

module.exports = {
    async findAllLivros (req, res) {
        // try {
        //     const {livro_id,
        //         titulo,
        //         disponivel = true,
        //         setor,
        //         genero
        // } = req.body
        


        // const livro = await Livro.create({
        //     livro_id,
        //     titulo,
        //     disponivel,
        //     setor,
        //     genero
        // })
        const livros = await Livro.findAll()

        return res.status(200).json({livros})
        // } catch (error) {
        //     return res.status(200).json({error})
        // }
        
    }
}
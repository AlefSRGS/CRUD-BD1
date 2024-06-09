const {Router} = require('express')
const LivroController = require('./controller/LivroController')
const Livro = require('./models/Livro')

const router = Router()

router.get('/' , (req, res) => {
    return res.json({Hello: 'World'})
})

router.get('/livros' , (req, res) => {
    const livros = Livro.findAll()
    return res.status(200).json({livros})
})
// router.get('/livros' , LivroController.findAllLivros())

//router.post('/livro-create', LivroController.createLivro)


module.exports = router
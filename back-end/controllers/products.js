const products = [
    { 
        id: '1', 
        name: 'Arroz',
        userId: 2
    }, { 
        id: '2', 
        name: 'Berinjela',
        userId: 1
    }, { 
        id: '3', 
        name: 'Feijao',
        userId: 2
    }
]

const productsControllerFactory = ({ connection }) => {
    const getAll = (req, res) => {

        if(!req.userId) {        
            res.status(403).send('Não autorizado')
            return
        }

        const itemsResult = products.filter(x => x.userId === req.userId)
        res.send(itemsResult)
    }

    return {
        getAll
    }
}

module.exports = productsControllerFactory
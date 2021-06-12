
const response = (res)=>{
    const send = (value)=> res.status(200).send(value)
    const error = ()=> res.status(500).send('Erro crítico ocorreu')
    const unauthorize = ()=> res.status(401).send('Não autorizado!')
    const forbiden = ()=> res.status(403).send('Acesso não permitido!')

    return{
        send,
        error,
        unauthorize,
        forbiden
    }
}

module.exports = response
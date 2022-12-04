function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        if (algumNome){
            return `Saudacoes ${algumNome}, tudo bem?`}
        else {
            return 'Saudacoes, tudo bem?'
        }
    }
    return(
        <><p>{gerarSaudacao(nome)}</p></>
    )
}

export default Saudacao
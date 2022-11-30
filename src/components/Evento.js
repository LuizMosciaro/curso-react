function Evento({numero}) {

    function meuEvento() {
        console.log(`Evento ${numero} foi ativado!`)
    }

    return(
        <div>
            <p>Clique para disparar o evento {numero}:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento
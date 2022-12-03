function OutraLista({ itens }) {
    return(
        <>
        <h3>Lista de Fronted</h3>
            {itens.length > 0 ? (itens.map((item,index) => <p>{index+1} - {item}</p>)
            ) : (
                <p>Lista vazia</p> 
                )
            }
        </>
    )
}

export default OutraLista
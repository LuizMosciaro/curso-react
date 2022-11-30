import Item from "./Item";

function List() {
    return (
        <>
            <h3>Lista de Carros</h3>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2021} /> 
                <Item marca="Lamborghini" ano_lancamento={2022} />
                <Item marca="Audi" ano_lancamento={2020} />
                <Item />
            </ul>
        </>
    )
}

export default List
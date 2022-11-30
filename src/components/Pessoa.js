/*function Pessoa(props){
    return (
        <div>
            <img src={props.foto} alt="props.foto"></img>
            <h3>Nome: {props.nome}</h3>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    )
}*/

/** Utilizando object destructuring: */
function Pessoa({nome,idade,profissao,foto}){
    return (
        <div>
            <img src={foto} alt="foto"></img>
            <h3>Nome: {nome}</h3>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa
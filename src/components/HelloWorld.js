import Frase from "./Frase"

function HelloWorld(){
    return (
        <div>
            <h1>Componente HelloWorld: Um simples componente</h1>
            {/** Tambem e possivel importar um componente
             *  dentro de outro componente */}
            <Frase />
        </div>
    )
}

export default HelloWorld
import Button from "./Button"
function Evento() {

    function meuEvento() {
        console.log(`Ativando o primeiro evento`)
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <div>
                <Button event={meuEvento} text = 'Button: Primeiro evento'/>
            </div>
            <div>
                <Button event={segundoEvento} text = 'Button: Segundo evento'/>
            </div>
        </div>
    )
}

export default Evento
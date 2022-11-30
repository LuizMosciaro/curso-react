function Form() {
    
    function cadastrarUsuario(event){
        event.preventDefault()
        console.log(`Usuario cadastrado: ${event.target[0].value}`)
    }
    
    return (
        <>
            <h1>Cadastro de usuario:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type='text' placeholder='Seu Nome'></input>
                </div>
                <div>
                    <input type='submit' value='Cadastrar'></input>
                </div>
            </form>
        </>
    )
}

export default Form
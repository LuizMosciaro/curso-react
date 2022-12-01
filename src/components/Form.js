import {useState} from 'react'

function Form() {
    
    function cadastrarUsuario(event){
        event.preventDefault()
        console.log(`Usuario cadastrado: ${name} \nSenha: ${password}`)
    }
    
    const [name, setName] = useState('Kabllez')
    const [password, setPassword] = useState('12345')

    return (
        <>
            <h1>Cadastro de usuario:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input 
                    type='text' 
                    placeholder='Seu Nome' 
                    id='name' 
                    name='name' 
                    value = {name}
                    onChange={(e)=> setName(e.target.value)}></input>
                </div>
                <div>
                    <label 
                    htmlFor='password'>Senha:</label>
                    <input 
                    type='text' 
                    placeholder='Senha' 
                    id='password' 
                    name='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
                    <input 
                    type='submit' 
                    placeholder='cadastrar' 
                    id='cadastrar' 
                    name='cadastrar'
                    ></input>
            </form>
        </>
    )
}

export default Form
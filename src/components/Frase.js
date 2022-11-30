import styles from './Frase.module.css'

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <h2 className={styles.fraseContent}>Componente FraseJs: Frase criativa</h2>
            <p>Paragrafo da pagina</p>
        </div>
    )
}

export default Frase
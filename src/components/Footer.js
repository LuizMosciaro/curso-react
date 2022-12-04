import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './pages/layout/Footer.module.css'

function Footer(){
    return (
        <footer>
            <ul className={styles.social_list}>
                <li> <FaFacebook/></li>
                <li> <FaInstagram/></li>
                <li> <FaLinkedin/></li>
            </ul>
            <p>Rodape da pagina</p>
        </footer>    
    )
}
export default Footer
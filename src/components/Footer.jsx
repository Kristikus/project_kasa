import logo from '../assets/LOGO.png'
import '../styles/Footer.module.css'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
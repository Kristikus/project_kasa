import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'


function Header() {
    return (
        <div>
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </div>

    )
}

export default Header
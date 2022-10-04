
import './Header.css'
import { Link } from 'react-router-dom'




function Header() {

   
    return (
        <nav className="header">
            <img className="header__logo" alt="logo" src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg" />
            <div className="header_title">MOMINOS PIZZA</div>
            
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">HOME</span>
                       
                    </div>
            
                </Link>
               

            </div>
        
        </nav>
    );
}

export default Header
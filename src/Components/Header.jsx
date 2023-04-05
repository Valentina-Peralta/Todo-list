import moonIcon from '../Img/icon-moon.svg';
import sunIcon from '../Img/icon-sun.svg';
import '../Stylesheets/Header.css'

function Header({ handleButton, themeHeader }) {


    return (
        <div className='header'>
            <h1>TODO</h1>
            <button className='theme'
                onClick={handleButton}>

                <img
                    src={themeHeader === 'light' ? moonIcon : sunIcon}
                    className='moonIcon'
                    alt='moonIcon' />

                <img
                    className='sunIcon'
                    src={sunIcon}
                    alt='sunIcon'
                    style={{ display: 'none' }} />
            </button>
        </div>
    )
}

export default Header;
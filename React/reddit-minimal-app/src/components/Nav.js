import './styles/css/Nav.css';
import logo from '../Icons/redditlogo.svg'
// import shapes from '../Icons/shapes.svg'

const Nav = () => {
    return (
        <nav>
            {/* <img src={shapes} alt='' width='100%'></img> */}
            <div className='headerLogo'>
                <img src={logo} alt='Reddit Logo'/>
                <h4 style={{color: '#2D9CDB'}} className='logoText'>Reddit</h4>
                <h4 className='logoText'>Minimal</h4>
            </div>
        </nav>
    )
}

export default Nav;
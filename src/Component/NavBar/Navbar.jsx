import './Navbar.css'
import Sidebar from './Sidebar/Sidebar'

function Navbar() {
    
    return (
        <nav className='navbar'>
            <Sidebar/>
            <div className="wrapper">
                <span>Lame Dev</span>
                <div className="social">
                    <a href="">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}


export default Navbar
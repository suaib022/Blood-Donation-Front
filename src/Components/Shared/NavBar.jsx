import logo from '../../assets/redcross-logo.png.img.png'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link>Blog</Link></li>
    </>

    return (
        <div>
            <div className="navbar fixed text-white w-full max-w-6xl bg-black bg-opacity-30">
                <div className="navbar-start">
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content md:hidden">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-black text-white bg-opacity-30">
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    <a className="btn navbar-start btn-ghost text-xl"><img className='w-24' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-secondary">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
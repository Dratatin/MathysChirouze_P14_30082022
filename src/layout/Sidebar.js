import { NavLink } from 'react-router-dom'
import logo from './../assets/logo.jpg'

function Sidebar() {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__wrapper__title'>
                    <h1>HRnet<span className='header__wrapper__title__point'>.</span></h1>
                </div>
                <nav className='header__wrapper__nav'>
                    <ul className='header__wrapper__nav__list'>
                        <li>
                            <NavLink to='/create-employee' >Create Employee</NavLink>
                        </li>
                        <li>
                            <NavLink to='/employee-list'>Employee List</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='header__wrapper'>
                <img className='header__wrapper__company-logo' src={logo} alt="Wealth Health logo"></img>
            </div>
        </header>
    )
}

export default Sidebar
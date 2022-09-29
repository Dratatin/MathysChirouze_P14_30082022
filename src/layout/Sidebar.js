import { NavLink } from 'react-router-dom'
import logo from './../assets/logo.jpg'

function Sidebar() {
    return (
        <header className='header'>
            <div className='header__title'>
                <h1>HRnet<span className='header__title__point'>.</span></h1>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav__list'>
                    <li className='header__nav__list__elem'>
                        <NavLink to='/create-employee' >Create Employee</NavLink>
                    </li>
                    <li className='header__nav__list__elem'>
                        <NavLink to='/employee-list'>Employee List</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='header__logo'>
                <img className='header__logo__img' src={logo} alt="Wealth Health logo"></img>
            </div>
        </header>
    )
}

export default Sidebar
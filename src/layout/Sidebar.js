import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <header className='header'>
            <div>
                <h1>HRnet<span>.</span></h1>
            </div>
            <nav>
                <Link to='#'>Create Employee</Link>
                <Link to='#'>Employee List</Link>
            </nav>
        </header>
    )
}

export default Sidebar
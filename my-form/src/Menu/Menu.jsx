import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

function Menu() {
    return (
        <div>
            <nav>
                <ul className='navLinks'>
                    <div>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/newform">Form</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/aboutme">About Me</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Menu

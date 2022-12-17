import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"

function Menu() {

    let activeStyle = {
        textDecoration: "none",
        borderBottom: "4px solid tomato",
        borderRadius: "10px",
        borderWidth: ".3rem",
        // borderBottomStyle: "dashed",
      };

    return (
        <div>
            <nav>
                <ul className='navLinks'>
                    {/* <div> */}
                        <li className="underline">
                            <NavLink className="noUnderline" style={({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
                        </li>
                    {/* </div> */}
                    {/* <div> */}
                        <li>
                            <NavLink className="noUnderline" style={({isActive}) => isActive ? activeStyle : undefined}  to="/newform">Form</NavLink>
                        </li>
                    {/* </div> */}
                    {/* <div> */}
                        <li>
                            <NavLink className="noUnderline" style={({isActive}) => isActive ? activeStyle : undefined}  to="/aboutme">About Me</NavLink>
                        </li>
                    {/* </div> */}
                </ul>
            </nav>
        </div>
    )
}

export default Menu

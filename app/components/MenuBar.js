import React from 'react'
import '../css/navbarStyle.css'

//Creating a new React JS function to put in a menu list
function MenuBar() {
    return(
        <div className='navbar'>
        <div id="menu_list">
            <ul>
                <li><a className="active" href="#home"><b><i>About us</i></b></a></li>
                <li><a href="#news"><b><i>Products&nbsp;</i></b></a></li>
                <li><a href="#contact"><b><i>Offers</i></b></a></li>
                <li className="rightSection"><a href="#about"><b><i>Login</i></b></a></li>
            </ul>
        </div>    
        </div>
    )
}

export default MenuBar;
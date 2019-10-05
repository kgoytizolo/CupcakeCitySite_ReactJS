import React from 'react';
import '../css/style.css';                              //Importing styles after installing Style Loader and CSS Loader
import CupcakeLogo from '../images/cupcake_icon.png';   //Importing images after installing url loader

function Header(){
    return(
        <header className='headerStyle'>            
            <div id='header'>
                <h1>Cupcake City with React JS&nbsp;<img onMouseOver={() => console.log("Image event")} src={CupcakeLogo} /></h1>                
            </div> 
        </header>
    )
}

export default Header;
import React from 'react';
import Register from './Register';
import '../css/style.css';
import CupcakeBackImg from '../images/cupcake_background_1.jpg';

function Content(props){

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const welcomeStyle = {
        fontSize: "20px"
    };
    let displayIntroContent = {
        display: "block",
        backgroundImage: `url(${CupcakeBackImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',  
        height: '100 px'
    };   
    let displayLoggedContent = {
        display: "none"
    }

    if(hours < 12){
        welcomeStyle.color = "#F4B50E";
    }
    else if (hours >= 12 && hours < 17){
        welcomeStyle.color = "#4CAF50";
    }
    else{
        welcomeStyle.color = "#0E3BF4";     
    }

    if(props.logged){
        displayIntroContent = {
            display: "none"
        };    
        displayLoggedContent = {
            display: "inline"
        }       
    }

    console.log(props.logged);

    return(
        <content>
        <div id='content' className='contentMain' style={displayLoggedContent} >
            <div className='rightSectionName'>
                <h3 style={welcomeStyle} >Welcome, {props.user.firstName} {props.user.lastName}</h3>
            </div>
           <Register />  
        </div>
        <div id='content2' className='contentMain2' style={displayIntroContent} >
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>        
        </content>
    )
}

export default Content;
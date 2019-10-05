import React, { Component } from 'react';
import MenuBar from './MenuBar';
import Content from './Content';
import Header from './Header';
import UserData from '../data/UserData.js';

class App extends Component {
    constructor(){
        super()
        this.state = {
            session: "ACD63561-5AFA-43A9-87CC-EE81BACE0026",
            logged: true,
            user: UserData               
        }
    }

    render() {
        console.log("Here we will put the user's session: " + this.state.session);
        console.log("Some user's data: FirstName = " + this.state.user.firstName 
                                    + ", LastName = " + this.state.user.lastName
                                    + ", Email = " + this.state.user.email );
        return (
            <div id = 'app_distribution'>
                <Header />
                <MenuBar />
                <Content user={this.state.user} logged={this.state.logged} />
            </div>          
        ) 
    }
}

export default App;

import React, { Component } from 'react';
import Categories from './Categories';
import CategoryData from '../data/CategoryData.js';
import '../css/style.css';

class User extends Component{
    constructor(props){
        super(props)
        this.state = {
            userMessage: "",
            action: props.action,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
            sex: "M",
            regCategoriesSelected: [],
            age: "0",
            aboutUser: "Put something about yourself"
        }
        this.handleSubmit = this.handleSubmit.bind(this);               //Binding is important in order to set any state object from an event
        this.handleInputChange = this.handleInputChange.bind(this);
        console.log("Action:" + props.action)        
    }

    //************** User's events ****************************/
    handleInputChange(event){                                   //For input forms only - updates the state key corresponding to the given input name
        const {name, value, type, checked} = event.target;                                          //Event properties ---> Similar to: [event.target.name]: event.target.value   (inside this.setState)
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})     //In Js, [] represents string values (ES6 computed property name syntax)
    }
    
    handleSubmit(event){
        console.log("You have been added to Cupcake City");
        event.preventDefault();
        if(this.state.action == 'R'){
            this.setState(//prevState => 
                {   //If I want to know the previous version of the state (prevState parameter)
                    //return{
                        userMessage: "You have been added to Cupcake City!"
                    //}
                }
            )
        }
        
        console.log("New user's name (Reg): " + this.state.firstName);
        console.log("New user's lastname (Reg): " + this.state.lastName);
        console.log("New user's email (Reg): " + this.state.email);
        console.log("New user's password (Reg): " + this.state.password);    
        console.log("New user's age range (Reg): " + this.state.age); 
        console.log("New user's gender: (Reg): " + this.state.sex);
        console.log("About the user: (Reg): " + this.state.aboutUser);                
    }

    render(){
        if(this.state.action == 'R'){
            console.log("Action: Register User");

            //Logs should be added outside return
            console.log("Show log results for hidden exercises");
            console.log(CategoryData);

            const catComponents = CategoryData.map(cat => <Categories key={cat.id} cat={cat} />);

            return(
                <form onSubmit={this.handleSubmit}>
                <h1>Register to Cupcake City</h1>                
                <table>
                    <tbody>
                        <tr>
                            <td>First Name:&nbsp;</td>        
                            <td><input type="text" 
                                        value={this.state.firstName} 
                                        name="firstName" 
                                        placeholder="Enter First Name" 
                                        onChange={this.handleInputChange} /></td>                                
                        </tr>
                        <tr>
                            <td>Last Name:&nbsp;</td>        
                            <td><input type="text"
                                        value={this.state.lastName}
                                        name="lastName" 
                                        placeholder="Enter Last Name"
                                        onChange={this.handleInputChange} /></td>                                
                        </tr>                    
                        <tr>
                            <td>Email:&nbsp;</td>        
                            <td><input type="text"
                                        value={this.state.email}
                                        name="email"
                                        placeholder="Enter your Email"
                                        onChange={this.handleInputChange} /></td>                                
                        </tr>                                       
                        <tr>
                            <td>Password:&nbsp;</td>        
                            <td><input type='password'
                                        value={this.state.password}
                                        name="password"
                                        placeholder="Enter a Password" 
                                        onChange={this.handleInputChange}
                                        /></td>                                
                        </tr>                                                            
                        <tr>
                            <td>Repeat Password:&nbsp;</td>        
                            <td><input type='password'
                                        value={this.state.password2}
                                        name="password2"
                                        placeholder="Enter same Password Again" 
                                        onChange={this.handleInputChange}
                                        /></td>                                
                        </tr>
                        <tr>
                            <td>Age:&nbsp;</td>
                            <td>
                                <select 
                                        value={this.state.age} 
                                        onChange={this.handleInputChange}
                                        name="age"
                                    >
                                    <option value="0">Please, select your age</option>
                                    <option value="1">Under 21</option>
                                    <option value="2">Between 21 - 35</option>
                                    <option value="3">Between 36 - 50</option>
                                    <option value="4">Between 51 - 65</option>  
                                    <option value="4">Over 66</option>                                                                                                                                                                                    
                                </select>
                            </td>
                        </tr>                                                                                
                        <tr>
                            <td><p>Gender:&nbsp;</p></td>
                            <td>
                                <input type='radio' name='sex' value='M' checked={this.state.sex === 'M'} onChange={this.handleInputChange} />Male&nbsp;
                                <input type='radio' name='sex' value='F' checked={this.state.sex === 'F'} onChange={this.handleInputChange} />Female
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'><p><b>Tell us a bit more about yourself:&nbsp;</b></p></td>
                        </tr>                        
                        <tr>
                            <td colSpan='2'>
                                <textarea 
                                    name="aboutUser"
                                    value={this.state.aboutUser}
                                    onChange={this.handleInputChange} 
                                />
                            </td>
                        </tr>                                                
                        <tr>
                            <td colSpan='2'><p><b>Which products are you interested in?:&nbsp;</b></p></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                {catComponents}                                                                                   
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>&nbsp;</td>
                        </tr>                    
                        <tr>
                            <td colSpan='2'><input type='submit' value='I am in!' /></td>
                        </tr>                    
                    </tbody>
                </table>                
                <div id="userMessage" className="actionMessage">
                    <b><p>{this.state.userMessage}</p></b>
                </div>
                </form>
            )            
        }
        else{
            console.log("Other user's activity");
            return(
                <div id="userMessage">
                    <b>{this.state.userMessage}</b>
                </div>
            )            
        }
    }

}

export default User;
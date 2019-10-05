import React from 'react';
import User from './User';
import Product from './Product';
import '../css/style.css';

function Register(){

    return(
        <div id ='register'>
            <User action='R' />
            <Product />                                          
        </div>
    )
}

export default Register;
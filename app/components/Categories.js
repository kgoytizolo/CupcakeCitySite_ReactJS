import React from 'react'
import '../css/style.css';

function Categories(props){
    return(
        <div>
            <input type='checkbox' value={props.cat.id} name={props.cat.id} defaultChecked={props.cat.selected} />
            {props.cat.name}
        </div>
    )
}

export default Categories;
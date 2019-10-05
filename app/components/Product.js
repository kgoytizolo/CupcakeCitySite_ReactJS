import React, {Component} from 'react';

class Product extends Component{
    constructor() {
        super()
        this.state = {
            loading: false,
            product: {}
        }
    }

    //***** Product Events ******

    //***** Product Services (Hooks) *****
    componentDidMount(){                                //Charging for the first time
        fetch("https://my-json-server.typicode.com/kgoytizolo/CupcakeCityJsonRepo/products/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    product: data
                })
            })
    };

    render(){
        console.log("Product name: " + this.state.product.product_name);
        return(
            <div id='divProductDetail'>Product details soon</div>
        )
    }

}

export default Product;
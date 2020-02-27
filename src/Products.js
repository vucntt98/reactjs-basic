import React from 'react';
import Product from './Product';
export default class Products extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            arrProduct: [
                { name: 'Vu',     age: 18},
                { name: 'Nhung',  age: 18},
                { name: 'Truc',   age: 18},
            ]
        }
    }
    render() {
        const { arrProduct } = this.state
        return (
         <div>
            <h1>PRODUCTS</h1>
        {   
            arrProduct.map(product =>(
                <Product key = {`Keys:${product.name}`} name={product.name} age={product.age}/> 
            ))
        }
         </div>
        )
    }
}
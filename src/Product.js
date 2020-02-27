import React from 'react';
export default class Product extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        const { name, age } = this.props
        return(
            <div style = {{color: 'blue'}} >
                Product: <strong>{name}</strong>   || Age: <strong>{age}</strong> 
            </div>
        )
    }
}
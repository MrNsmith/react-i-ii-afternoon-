import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product'


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state ={
            editView:false
        }
    }
    deleteItem = () => {
       
        axios.delete(`/api/product/${[this.props.inventory[0].id]}`)
        .then(() => this.props.inventoryFn())
        .catch((err)=> console.log(err))
        console.log([this.props.inventory[0].id])
        
    }
    render(){
        const mappedList = this.props.inventory.map((items,i)=>{
            return(
                <Product key={i} 
                itemName={items.name}
                itemPrice={items.price}
                itemImgUrl={items.img}
                deleteFn={this.deleteItem}
                
                />
            )
        })
            return(
                <main>
                    <h1>Dashboard</h1>
                    {mappedList}
                </main>
            )
    

    }
    
}
export default Dashboard;
import React from 'react';
import Product from '../Product/Product'

function Dashboard (props){
    const mappedList = props.inventory.map((items,i)=>{
        return(
            <Product key={i} 
            itemName={items.name}
            itemPrice={items.price}
            itemImgUrl={items.img}
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
export default Dashboard;
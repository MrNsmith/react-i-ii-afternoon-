import React  from 'react';


function Product(props){
    console.log(props.itemImgUrl)
        
    return(
        <div>
            <h1>{props.itemName}</h1>
            <h2>{props.itemPrice}</h2>
            <img src={props.itemImgUrl} alt={props.itemName}/>
            

        </div>
    )
    
    
}
export default Product;
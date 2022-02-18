import React from "react";

const CartItem =(props) =>{
  const { price, title, qty} = props.product;
    return (
        <div className="cart-item">
        <div className="left-block">
             <img style={styles.image} src={props.product.img} />
        </div>
         <div className="right-block">
             <div style={ {fontSize: 25}}>{title}</div>
             <div style={ {color: '#777'}}>{price}</div>
             <div style={  {color: '#777'}}>Qty: {qty}</div>
             <div className="card-item-actions">
              <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              onClick={()=> props.onIncreaseQuantity(props.product)}
              />
              <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/2920/premium/2920674.png?token=exp=1645070279~hmac=3bf5d9d3c55d8a22c0b9546878ec0f2d"
               onClick={()=> props.onDecreaseQuantity(props.product)}
              />
              <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1645070335~hmac=b5d739e922348d9b025cbdc8bfadb3f4"
              onClick={()=> props.onDeleteProduct(props.product.id)}
              />
             </div>
         </div>
        </div>
    )
}

const styles = {
    image: {
       height: 110,
       width: 150,
       borderRadius: 4,
       background: '#ccc'
    }
}

export default CartItem;
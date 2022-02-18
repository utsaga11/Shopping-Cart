import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
                id: 1
            },
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
                id: 2
            },
            {
                price: 599,
                title: 'HeadPhone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
                id: 3
            },
            {
                price: 899,
                title: 'Earpods',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWFycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
                id: 4
            },
        ]
    }
}
handleIncreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) =>{
    const{products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return
    }
    products[index].qty -= 1;

    this.setState({
        products
    })
}
handleDeleteProduct = (id) =>{
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products:items
    })
}
getCartcount =() => {
  const { products} = this.state;

  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}
getCartTotal = () =>{
    const { products} = this.state;
   let cartTotal = 0;
   products.map((product) =>{
   cartTotal = cartTotal + product.qty*product.price
   })
   return cartTotal; 
}
  render(){
    const { products } = this.state;
     return (
    <div className="App">
    <Navbar 
    count = {this.getCartcount()}
    />
    <Cart
    products = {products}
     onIncreaseQuantity = {this.handleIncreaseQuantity} 
     onDecreaseQuantity = {this.handleDecreaseQuantity} 
     onDeleteProduct = {this.handleDeleteProduct}
    />
    <div style={{fontSize: 20, padding:10}}>
       TOTAL: {this.getCartTotal()} 
    </div>
    </div>
  );
  }
 }

export default App;

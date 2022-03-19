import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {db} from './firebase';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: []
    }
}

componentDidMount () {
  db
  .collection('products')
  .get()
  .then((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) =>{
        console.log(doc.data())
      });
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      this.setState({
        products: products
      })
  })
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
getCartcount = () => {
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
    <div style={{fontSize: 20, padding:10, backgroundColor: 'lightblue', color:'#494d52',fontWeight:'700',display:'flex',alignItems:"flex-end"}}>
       TOTAL: {this.getCartTotal()} 
    </div>
    </div>
  );
  }
 }

export default App;

import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 599,
                    title: 'HeadPhone',
                    qty: 1,
                    img: '',
                    id: 3
                },
                {
                    price: 899,
                    title: 'Earpods',
                    qty: 1,
                    img: '',
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
        render() {
        const { products } = this.state;
        return ( 
            <div className="cart">
                {/* props */}
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''} /> */}
                {products.map((product) => {
                    return <CartItem product={product} key={product.id} 
                    onIncreaseQuantity = {this.handleIncreaseQuantity} 
                    onDecreaseQuantity = {this.handleDecreaseQuantity} 
                    onDeleteProduct = {this.handleDeleteProduct}
                    />
                })}
            </div>
        );
    }
}

export default Cart;
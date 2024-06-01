import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5000, img: 'Images/Album 1.png' },
                { id: 2, title: 'Album 2', price: 1500, img: 'Images/Album 2.png' },
                { id: 3, title: 'Album 3', price: 200000, img: 'Images/Album 3.png' },
                { id: 4, title: 'Album 4', price: 10000, img: 'Images/Album 4.png' },
                { id: 5, title: 'Coffee', price: 5000, img: 'Images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 552000, img: 'Images/Shirt.png' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
            ],
        }

        this.addToCartHandle = this.addToCartHandle.bind(this)
        this.removeToCartHandle = this.removeToCartHandle.bind(this)
        this.removeAllOfCart = this.removeAllOfCart.bind(this)

    }
    // add product to shopping cart
    addToCartHandle(Id) {
        let getProduct = this.state.products.find((product) => {
            return product.id == Id
        })
        console.log(getProduct)
        let product = this.state.products
        this.setState((prevState) => {
            return { shoppingCart: [...prevState.shoppingCart, getProduct] }
        })
        console.log(this.state.shoppingCart)
    }

    // remove a product of shopping cart
    removeToCartHandle(Id) {
        let getIndexProduct = this.state.shoppingCart.findIndex((product) => {
            return product.id == Id
        })
        let shopCart = this.state.shoppingCart
        shopCart.splice(getIndexProduct, 1)
        this.setState({
            shoppingCart: shopCart
        })

    }
    // remove all products of shopping cart
    removeAllOfCart() {
       
        this.setState({
            shoppingCart: []
        })

    }

    render() {
        return (
            <>
                <header className="main-header">
                    <nav className="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 className="band-name band-name-large">Shopping cart</h1>
                </header>
                <section className="container content-section">
                    <div className="shop-items">

                        {this.state.products.map(product => (
                            <Product {...product} key={product.key} addCart={this.addToCartHandle} />
                        ))}
                    </div>
                </section>
                <section className="container content-section">
                    <h2 className="section-header">CART</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">ITEM</span>
                        <span className="cart-price cart-header cart-column">PRICE</span>
                        <span className="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div className="cart-items">

                        {this.state.shoppingCart.map((addedProduct) => (
                            <CartProduct {...addedProduct} onRemove={this.removeToCartHandle} />
                        ))}


                    </div>
                    <button className="btn btn-primary btn-purchase" type="button" onClick={this.removeAllOfCart}>
                        Empty Cart
                    </button>
                </section>
                <footer className="main-footer">
                    <div className="container main-footer-container">
                        <h3 className="band-name">The Generics</h3>
                        <ul className="nav footer-nav">

                            {this.state.socials.map(social => (
                                <Social {...social} key={social.key} />
                            ))}
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}
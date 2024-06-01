import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)

      
    }

    addToCart(productId) {
        this.props.addCart(productId)


    }


    render() {
        return (
            <div class="shop-item">
                <span class="shop-item-title">{this.props.title}</span>
                <img class="shop-item-image" src={this.props.img} />
                <div class="shop-item-details">
                    <span class="shop-item-price">{this.props.price} </span>
                    <button
                        class="btn btn-primary shop-item-button"
                        type="button" onClick={this.addToCart.bind(this,this.props.id)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}

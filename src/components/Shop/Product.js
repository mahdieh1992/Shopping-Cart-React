import React from 'react'

export default function Product (props) {


   const addToCart=(productId)=> {
       props.addCart(productId)


    }


 
        let { title, img, price, id } = props
        return (
            <div class="shop-item">
                <span class="shop-item-title">{title}</span>
                <img class="shop-item-image" src={img} />
                <div class="shop-item-details">
                    <span class="shop-item-price">{price} </span>
                    <button
                        class="btn btn-primary shop-item-button"
                        type="button" onClick={()=>addToCart(id)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
 
}

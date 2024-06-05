import React from 'react'

export default function CartProduct(props) {




    const removeProduct = (productId) => {
        props.onRemove(productId)
    }


    let { title, img, id, price } = props

    return (
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src={img} width="100" height="100" />
                <span class="cart-item-title">{title}</span>
            </div>
            <span class="cart-price cart-column">{price}</span>
            <div class="cart-quantity cart-column">

                <button class="btn btn-danger" type="button" onClick={() => removeProduct(id)}>REMOVE</button>
            </div>
        </div>
    )

}

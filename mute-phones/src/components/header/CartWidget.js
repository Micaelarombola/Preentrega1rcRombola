import React from 'react';
import cart from "../../img/cart.svg";


const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart" ></img>
            <span className="cantCart">
                5
            </span>
        </div>
    );
}

export default CartWidget;

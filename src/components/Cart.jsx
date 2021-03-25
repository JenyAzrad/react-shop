import { useContext } from 'react';
import { ShopContext } from '../contex';

function Cart(props) {
    const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

    const quantity = order.length;

    return (
        <div
            className='cart yellow darken-4 white-text'
            onClick={handleBasketShow}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export {Cart}
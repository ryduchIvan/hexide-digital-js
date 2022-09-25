import CloseImg from "../../assets/img/close-svgrepo-com.svg";
//CSS
import "./cart.scss";
//Components
import {CartItem} from "./CartItem";
//Select
function CartList(props) {
	const {status, items, closeCart} = props;

	const createTotalPrice = () =>{
		let totalPrice = 0;
		items.map(item => {
			const price = +item.price * item.quintity;
			totalPrice += price
		})
		return Math.ceil(totalPrice);
	}
	return(
		<div className={status ? `cart__list show-cart` : `cart__list`}>
			<img className="cart__close" src={CloseImg} alt="close_img" onClick={closeCart}/>
			<div className="cart__title">
				<h1>Cart</h1>
			</div>
			{
				!items.length && <div className="cart_empty">
					<img src="https://kilogramm.com.ua/image/cart_none.png" alt="empty img" className="cart_empty__img" />
					<div className="cart_empty__title">
						There is nothing in the basket, so it is sad
					</div>
				</div>
			}
			<div className="cart__content">
			{
				items.map(item => <CartItem key={item.id} {...item}/>)//push product information
			}
			</div>
			{
				items.length > 0 && <div className="cart__total__price">
						Total price: <span>{createTotalPrice()}</span> usd
			</div>
			}
		</div>
	)
}

export {CartList};
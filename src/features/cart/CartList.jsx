import CloseImg from "../../assets/img/close-svgrepo-com.svg";
//CSS
import "./cart.scss";
//Components
import {CartItem} from "./CartItem";
//Select
function CartList(props) {
	const {status, items, toggleCart} = props;

	const createTotalPrice = () =>{
		let totalPrice = 0;
		items.map(item => {
			const price = +item.price * item.quintity;
			totalPrice += price
		})
		return Math.ceil(totalPrice);
	}
	return(
		<div className={status ? `cart__list show` : `cart__list`}>
			<img className="item__close" src={CloseImg} alt="close_img" onClick={toggleCart}></img>
			<h1 className="cart__title">Cart</h1>
			{
				!items.length && <div className="list__empty">
					<img src="https://kilogramm.com.ua/image/cart_none.png" alt="empty img" className="empty__img" />
					<div className="empty__title">
						There is nothing in the basket, so it is sad
					</div>
				</div>
			}
			{
				items.map(item => <CartItem key={item.id} {...item}/>)//push product information
			}
			{
				items.length > 0 && <div className="list__total">
					<div className="total__price">
						Total price: <span>{createTotalPrice()}</span> usd
					</div>
			</div>
			}
		</div>
	)
}

export {CartList};
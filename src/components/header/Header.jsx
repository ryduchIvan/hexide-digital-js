import ShopLogo from "../../assets/img/Shop.svg";
import ShopingCart from "../../assets/img/shopping-cart-svgrepo-com.svg";
//CSS
import "./header.scss";
//Components
import {CartList} from "../../features/cart/CartList";
//Select
import {selectCart} from "../../features/cart/cart-slice";
//Instruments
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
function Header(params) {
	const [isCart, setIsCart] = useState(false);
	const {items} = useSelector(selectCart);//got a list of products in the cart
	const toggleCart = () =>{//open or close cart
		if (isCart) {
			setIsCart(false)
		} else {
			setIsCart(true)
		}
	}
	return(
		<header className="header">
			<div className="header__container container">
			<div className="header__row">
				<img src={ShopLogo} alt="" className="header__img" />
				<div className="header__cart" >
					<div className="header__logo">
						<img src={ShopingCart} alt="" onClick={toggleCart}/>
						<span className="header__quantity">{items.length}</span>
					</div>
					<CartList status={isCart} items={items} toggleCart={toggleCart}/>
				</div>
			</div>
			</div>
		</header>
	)//give information about the product and the function that opens and closes the window
}

export {Header};
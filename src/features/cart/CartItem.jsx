import Plus from "../../assets/img/plus-svgrepo-com.svg";
import Minus from "../../assets/img/minus-svgrepo-com.svg";
import Close from "../../assets/img/close-svgrepo-com (1).svg";
//Instruments
import { useDispatch} from "react-redux";
//Action
import {addQuantity, minusQuantity, removeFromCart} from "./cart-slice";

function CartItem(props) {
	const {id, image, price, quintity, correctTitle, title} = props;//accept product information

	const dispatch = useDispatch();
	return(
		<div className="cart__item">
			<img className="cart__item_close" src={Close} alt="close_img" onClick={() =>{
				dispatch(removeFromCart(id))
			}}></img>
			<div className="cart__row">
				<img className="cart__img" src={image} alt="cart_img"></img>
				<div className="cart__info">
				<div className="cart__title">
				{title === correctTitle ? <p>{title}</p> : <p>{correctTitle}...</p>}
				</div>
				<div className="cart__price">
					{Math.ceil(price * quintity)} <span>usd</span>
					<div className="cart__quintity">
						<span>amount:</span>{quintity}
					</div>
				</div>
				<div className="cart__btn">
						<img src={Plus} alt="plus" onClick={() =>{
							dispatch(addQuantity(id))
						}}/>
						<img src={Minus} alt="minus" onClick={() =>{
							dispatch(minusQuantity(id))
						}}/>
				</div>
			</div>
			</div>
		</div>
	)
}
export{CartItem}
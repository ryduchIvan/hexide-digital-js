import Plus from "../../assets/img/plus-svgrepo-com.svg";
import Minus from "../../assets/img/minus-svgrepo-com.svg";
import Close from "../../assets/img/close-svgrepo-com (1).svg";
//Instruments
import { useDispatch} from "react-redux";
//Action
import {addQuantity, minusQuantity, removeFromCart} from "./cart-slice";

function CartItem(props) {
	const {id, image, price, quintity, title} = props;//accept product information

	const dispatch = useDispatch();
	return(
		<div className="cart__item">
			<img className="cart__item_close" src={Close} alt="close_img" onClick={() =>{
				dispatch(removeFromCart(id))
			}}></img>
			<div className="item__row">
				<img className="row__img" src={image} alt="cart_img"></img>
				<div className="item__info">
				<div className="info__title">
					{title}
				</div>
				<div className="info__price">
					{Math.ceil(price * quintity)} <span>usd</span>
					<div className="price__quintity">
						<span>amount:</span>{quintity}
					</div>
				</div>
				<div className="info__btn">
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
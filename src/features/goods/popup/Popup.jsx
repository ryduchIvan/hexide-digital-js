//CSS
import  "./popup.scss";
//Instruments
import {useDispatch} from "react-redux";
//Actions
import {addToCart} from "../../cart/cart-slice";
function Popup(props) {
	const {infoAboutItem, closePopup} = props;
	const {title,price,image,description} = infoAboutItem;
	const dispatch = useDispatch();
	const addToBag = () =>{
		dispatch(addToCart(infoAboutItem))
	}
		return(
			<div className="popup" onClick={(event) =>{
				if (event.target.classList.contains("popup")) {
					closePopup();
				}
			}}>
				<div className="popup__content">
					<div className="popup__row">
						<div className="popup__item">
						<img src={image} alt="" className="popup__img" />
						</div>
						<div className="popup__info">
							<div className="popup__title">{title}</div>
							<div className="popup__description">{description}</div>
							<div className="popup__price">price: {price} usd</div>
							<div className="popup__btn btn" onClick={addToBag}>ADD TO CART</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export {Popup};
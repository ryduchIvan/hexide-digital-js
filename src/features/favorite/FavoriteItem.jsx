//Instruments
import {useDispatch} from "react-redux";
//Actions
import {removeFromCart} from "./favorite-slice";
import {addToCart} from "../cart/cart-slice";
import Close from "../../assets/img/close-svgrepo-com (1).svg";
function FavoriteItem(props) {
	const {item} = props;//accept product information
	const {image, title, id} = item;
	const dispatch = useDispatch();
	const addToBag = () =>{
		dispatch(addToCart(item))
	}
	return(
		<div className="favorite__item">
			<img className="favorite__item_close" src={Close} alt="close_img" onClick={() =>{
				dispatch(removeFromCart(id))
			}}></img>
			<div className="favorite__row">
				<img className="favorite__img" src={image} alt="favorite_img"></img>
				<div className="favorite__info">
				<div className="favorite__title">
					{title}
				</div>
				</div>
			</div>
			<button className="favorite__btn btn" onClick={addToBag}>Add to cart</button>
		</div>
	)
}

export {FavoriteItem};
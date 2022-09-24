//CSS
import "./goods.scss";
//Instrumets
import {useDispatch, useSelector} from "react-redux";
//Actions
import {addToCart} from "../cart/cart-slice";
function GoodsItem(props) {
	const {id, title, price, description, category, image, rating} = props;
	const dispatch = useDispatch();
	const correctTitle = title.slice(0, 18);

	const infoAboutItem ={
		id,
		title,
		price,
		image
	}

	return(
		<div className="row__item">
			<img className="item__img" src={image} alt="item img"></img>
			<div className="item__title">
			{title === correctTitle ? <p>{title}</p> : <p>{correctTitle}...</p>}
			</div>
			<button className="item__btn" onClick={() =>{
				dispatch(addToCart(infoAboutItem))
			}}>
				Add to cart
			</button>
			<div className="item__price">
				{price} usd
			</div>
		</div>
	)
}

export {GoodsItem};
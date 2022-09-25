import Heart from "../../assets/img/heart.svg";
//CSS
import "./goods.scss";
//Instrumets
import {useDispatch} from "react-redux";
import { useState } from 'react';
import {useParams} from "react-router-dom";
//Actions
import {addToCart} from "../cart/cart-slice";
import { Popup } from './popup/Popup';
import {addToFavorite} from "../favorite/favorite-slice";
function GoodsItem(props) {
	const [isPopup, setIsPopup] = useState(false);
	const {id, title, price, description, image, gridFormat} = props;
	const dispatch = useDispatch();
	const correctTitle = title.slice(0, 18);

	const infoAboutItem ={
		id,
		correctTitle,
		title,
		price,
		image,
		description
	}//I created an object of information about the product in order to further reflect it in the cart , popup and favorite items
	const addToBag = () =>{
		dispatch(addToCart(infoAboutItem))
	}
	const openPopup = () =>{
		setIsPopup(true);
	}
	const closePopup = () =>{
		setIsPopup(false);
	}
	const addToFavoriteItem = () =>{
		dispatch(addToFavorite(infoAboutItem))
	}
	return(
		<>
			<div className={gridFormat === 4 ? "catalog__item" : "catalog__item catalog__item_big"}>
				<div className="item__img_box">
				<img className="item__img" src={image} alt="item img" />
				<div className="item__opened__popup" onClick={openPopup}>
					<button className='item__btn__popup'>Watch more</button>
				</div>
				</div>
				<div className="item__title">
				{title === correctTitle ? <p>{title}</p> : <p>{correctTitle}...</p>}
				</div>
				<button className="item__btn btn" onClick={addToBag}>
				Add to cart
				</button>
				<div className="item__price">
				{price} usd
					<img src={Heart} alt="heart" className="item__favorite_img" onClick={addToFavoriteItem} />
				</div>
			</div>
			{
				isPopup && <Popup infoAboutItem={infoAboutItem} closePopup={closePopup}/> 
			}
		 </>//I passed inforamtion about item , function which close popup, and popup`s status for css class
	)
}

export {GoodsItem};
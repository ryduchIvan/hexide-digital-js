//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//CSS
import "./goods.scss";
//Instrumets
import {useDispatch} from "react-redux";
import { useState } from 'react';
//Actions
import {addToCart} from "../cart/cart-slice";
import { Popup } from './popup/Popup';
function GoodsItem(props) {
	const [isPopup, setIsPopup] = useState(false);
	const {id, title, price, description, image, gridsFormat} = props;
	const dispatch = useDispatch();
	const correctTitle = title.slice(0, 18);

	const infoAboutItem ={
		id,
		correctTitle,
		title,
		price,
		image,
		description
	}//I created an object of information about the product in order to further reflect it in the cart and popup
	const addToBag = () =>{
		dispatch(addToCart(infoAboutItem))
	}
	const openPopup = () =>{
		setIsPopup(true);
	}
	const closePopup = () =>{
		setIsPopup(false);
	}
	return(
		<>
			<div className={gridsFormat === 4 ? "catalog__item " : "catalog__item catalog__item_big"}>
				<img className="item__img" src={image} alt="item img" onClick={openPopup}/>
				<div className="item__title">
				{title === correctTitle ? <p>{title}</p> : <p>{correctTitle}...</p>}
				</div>
				<button className="item__btn btn" onClick={addToBag}>
				Add to cart
				</button>
				<div className="item__price">
				{price} usd
				</div>
			</div>
			 	<Popup infoAboutItem={infoAboutItem} closePopup={closePopup} isPopup={isPopup}/>
		 </>//I passed inforamtion about item , function which close popup, and popup`s status for css class
	)
}

export {GoodsItem};
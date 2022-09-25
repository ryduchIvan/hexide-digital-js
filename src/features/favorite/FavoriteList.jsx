//
import CloseImg from "../../assets/img/close-svgrepo-com.svg";
//CSS
import  "./favorite.scss";
//Select
//Instruments
import { FavoriteItem } from "./FavoriteItem";
function FavoriteList(props) {
	const {favorite, status, closeFavorite} = props;
	return(
		<div className={`${status ? "favorite__list show-favorite" : "favorite__list"}`}>
			<h1 className="favorite__title_main">Favorite Item</h1>
			<img src={CloseImg} alt="close" className="favorite__close" onClick={closeFavorite} />
			{
				favorite.length ? favorite.map(item => <FavoriteItem key={item.id} item={item} />)
				: 
				<div className="favorite__empty">
					<h4 className="favorite__empty_text">
						You haven't added anything here yet
					</h4>
				</div>
			}
		</div>
	)
}

export {FavoriteList};
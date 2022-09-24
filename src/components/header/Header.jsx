//CSS
import "./header.scss";
import ShopLogo from "../../assets/img/Shop.svg";
function Header(params) {
	return(
		<header className="header">
			<div className="header__container container">
				<img src={ShopLogo} alt="" className="container__img" />
			</div>
		</header>
	)
}

export {Header};
//CSS
import "./footer.scss";
import ShopLogo from "../../assets/img/Shop-w.svg";

function Footer(params) {
	return(
	<footer className="footer">
		<div className="footer__container container">
			<div className="container__content">
				<img className="content__logo" src={ShopLogo} alt="shop-logo"></img>
			</div>
		</div>
	</footer>
	)
}

export {Footer};
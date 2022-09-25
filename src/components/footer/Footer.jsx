//CSS
import "./footer.scss";
import ShopLogo from "../../assets/img/Shop-w.svg";

function Footer() {
	return(
	<footer className="footer">
		<div className="footer__container container">
			<div className="footer__content">
				<img className="footer__logo" src={ShopLogo} alt="shop-logo"></img>
				<h4>Created by RYDUCH</h4>
			</div>
			<p className="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus ducimus delectus consequuntur mollitia voluptate, eos laudantium beatae reiciendis facere, et corrupti commodi culpa a, dolor quia totam temporibus dolorum?</p>
		</div>
	</footer>
	)
}

export {Footer};
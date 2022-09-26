//CSS
import "./homepage.scss";
import {Link} from "react-router-dom";

function Homepage(params) {
	return(
		<main className="main">
			<div className="main__container container">
				<img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/august-2022/2022_unihp_desktop.jpg" alt="" />
				<Link to="/goods" className="main__btn btn">Go to catalog</Link>
			</div>
		</main>
	)
}

export {Homepage};
//CSS
import "./sidebar.scss";
import {Link} from "react-router-dom";
function Sidebar(params) {
	return(
		<aside className="main__filter">
			<ul className="filter__list">
				<li><Link to="/goods" className="list__link">Watch all</Link></li>
				<li><Link to="men's clothing" className="list__link">Men's clothing</Link></li>
				<li><Link to="women's clothing" className="list__link">Women's clothing</Link></li>
				<li><Link to="jewelery" className="list__link">Jewelery</Link></li>
				<li><Link to="electronics" className="list__link">Electronics</Link></li>
			</ul>
		</aside>
	)
}

export {Sidebar}
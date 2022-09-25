//CSS
import "./sidebar.scss";
import {Link} from "react-router-dom";
function Sidebar() {
	return(
		<aside className="main__filter">
			<ul className="filter__list">
				<li><Link to="/goods" className="filter__link">Watch all</Link></li>
				<li><Link to="men's clothing" className="filter__link">Men's clothing</Link></li>
				<li><Link to="women's clothing" className="filter__link">Women's clothing</Link></li>
				<li><Link to="jewelery" className="filter__link">Jewelery</Link></li>
				<li><Link to="electronics" className="filter__link">Electronics</Link></li>
			</ul>
		</aside>
	)
}

export {Sidebar}
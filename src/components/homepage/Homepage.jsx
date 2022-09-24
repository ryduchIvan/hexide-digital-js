import {Link} from "react-router-dom";

function Homapage(params) {
	return(
		<main className="main">
			<div className="main__container container">
				<h1>I am home page</h1>
				<Link to="/goods">Go to catalog</Link>
			</div>
		</main>
	)
}

export {Homapage};
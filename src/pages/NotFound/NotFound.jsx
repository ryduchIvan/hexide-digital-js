//CSS
import "./notFound.scss";
import {Link} from "react-router-dom";
function NotFound(params) {
	return(
		<>
		<div className="faker">
		<h1>Gage not found. Please click on button</h1>
			<Link to="/" className = "btn">Go to home</Link>
		</div>
		</>
	)
}

export {NotFound};
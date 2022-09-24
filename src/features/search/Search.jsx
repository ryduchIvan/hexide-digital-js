//CSS
import "./search.scss";
//Actions
import {addToSearch, selectSearch} from "./search";
//Instruments
import {useDispatch, useSelector} from "react-redux";
function Search() {
	const dispatch  = useDispatch();
	const search = useSelector(selectSearch);
	return(
		<div className="row__search">
			<input className="search__input" type="text" placeholder="Search" defaultValue={search} onChange={(event) =>{
				dispatch(addToSearch(event.target.value))
			}}/>
		</div>
	)//add value from input to store
}

export {Search};
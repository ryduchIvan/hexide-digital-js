//CSS
import "./search.scss";
//Actions
import {addToSearch, selectSearch} from "./search";
//Instruments
import {useDispatch, useSelector} from "react-redux";
import debounce from "lodash.debounce";
import {useCallback} from "react";
function Search() {
	const dispatch  = useDispatch();
	const search = useSelector(selectSearch);
	const onChangeValue = useCallback(debounce((event) =>{
		dispatch(addToSearch(event.target.value));
	}, 250), [])
	return(
		<div className="main__search">
			<input className="main__search__input" type="text" placeholder="Search" defaultValue={search} onChange={onChangeValue}/>
		</div>
	)//add value from input to store
}

export {Search};
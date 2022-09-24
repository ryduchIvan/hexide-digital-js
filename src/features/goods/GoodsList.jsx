//Instrumets
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//Actions
import {loadGoods} from "./goods-slice";
//Select
import {selectGoods} from "./goods-slice";
function GoodsList() {
	const dispatch = useDispatch();
	const {status, list, error} = useSelector(selectGoods);

	useEffect(()=>{
		dispatch(loadGoods());
	}, [])
	console.log(list);
	return(
		<main className="main">
		</main>
	)
}

export {GoodsList};
//Instrumets
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//Actions
import {loadGoods} from "./goods-slice";
//Select
import {selectGoods} from "./goods-slice";
//Components
import {GoodsItem} from "./GoodsItem";
function GoodsList() {
	const dispatch = useDispatch();
	const {status, list, error} = useSelector(selectGoods);//get goods object
	console.log(error);
	useEffect(()=>{//get a list of products
		dispatch(loadGoods());
	}, [])
	return(
		<main className="main container">
			<aside className="main__filtet"></aside>
			<div className="main__row">
				{
					status === "loading" && <h1>Loading...</h1>
				}
				{
					status === "rejected" && <h1>{error}</h1>
				}
				{
					status === "fuilfilled" && list.map((good) => <GoodsItem key={good.id} {...good}/>)
				}
			</div>
		</main>
	)
}

export {GoodsList};
//Instrumets
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
//Actions
import {loadGoods} from "./goods-slice";
//Select
import {selectGoods} from "./goods-slice";
import { filtredGoods } from "./goods-slice";
//Components
import {GoodsItem} from "./GoodsItem";
import {Sidebar} from "./Sidebar";
function GoodsList() {
	const {category} = useParams();//get url
	const dispatch = useDispatch();
	const {status, list, error} = useSelector(selectGoods);//get goods object
	const filterList = filtredGoods(list, category);
	useEffect(()=>{//get a list of products
		dispatch(loadGoods());
	}, []);
	return(
		<main className="main container">
			<Sidebar/>
			<div className="main__row">
				{
					status === "loading" && <h1>Loading...</h1>
				}
				{
					status === "rejected" && <h1>{error}</h1>
				}
				{
					status === "fuilfilled" && filterList.map((good) => <GoodsItem key={good.id} {...good}/>)
				}
			</div>
		</main>
	)
}

export {GoodsList};
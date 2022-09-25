//Instrumets
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
//Actions
import {loadGoods} from "./goods-slice";
//Select
import {selectGoods} from "./goods-slice";
import { filtredGoods } from "./goods-slice";
import { selectSearch } from "../search/search-slice";
//Components
import {GoodsItem} from "./GoodsItem";
import {Sidebar} from "../sidebar/Sidebar";
import { Search } from "../search/Search.jsx";
import { PaginationNumber } from "./PaginationsNumber";
import { Preload } from "../../components/Preload/Preload";
function GoodsList() {
	//const [grid , setGrid] = useState(4);
	const [amountGoodsOnPage, setAmountGoodsOnPage] = useState(8);
	const [gridFormat, setGridFormat] = useState(4);
	const {category, numberOfPage = 1} = useParams();//get url
	const dispatch = useDispatch();
	const {status, list, error} = useSelector(selectGoods);//get goods object
	const search = useSelector(selectSearch)//get search from store
	const filteredList = filtredGoods(list, category, search);//create a filtered list,
	// the first parameter is the goods,
	// the second category of goods
	// the third is search from input
	useEffect(()=>{//get a list of products
		dispatch(loadGoods());
	}, [numberOfPage, dispatch]);
	 //Functions for handle grid`s format 
	//Pagination
	const lastGoodsIndex = numberOfPage * amountGoodsOnPage;
	const firstGoodsIndex = lastGoodsIndex - amountGoodsOnPage;
	const paginationGoods = filteredList.slice(firstGoodsIndex, lastGoodsIndex);

	const setFourWayOfGrid = () =>{
		setGridFormat(4)
	}
	const setTwoWayOfGrid = () =>{
		setGridFormat(2);
	}
	return(
		<main className="main">
			<div className="main__container container">
			<Search/>
			<div className="main__grid">
				<div className="main__grid_item" onClick={setTwoWayOfGrid} >
					<div className="grid__two__item"></div>
					<div className="grid__two__item"></div>
				</div>
				<div className="grid__four main__grid_item" onClick={setFourWayOfGrid}>
					<div className="main__four__item"></div>
					<div className="main__four__item"></div>
					<div className="main__four__item"></div>
					<div className="main__four__item"></div>
				</div>
			</div>
			<div className="main__row">
				<Sidebar/>
				<div className="main__catalog">
				{
					status === "loading" && <Preload/>
				}
				{
					status === "rejected" && <h1>{error}</h1>
				}
				{
					status === "fuilfilled" && paginationGoods.map((good) => <GoodsItem key={good.id} {...good} gridFormat={gridFormat} />)
				}
				</div>
			</div>
			<PaginationNumber amountGoodsOnPage={amountGoodsOnPage} totalAmountGoods = {filteredList.length} category={category} />
			</div>
		</main>
	)
}

export {GoodsList};
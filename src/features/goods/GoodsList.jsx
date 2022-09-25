//Instrumets
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
//Actions
import {loadGoods, setCurrentGoods} from "./goods-slice";
//Select
import {selectGoods} from "./goods-slice";
import { filtredGoods } from "./goods-slice";
import { selectSearch } from "../search/search-slice";
//Components
import {GoodsItem} from "./GoodsItem";
import {Sidebar} from "./Sidebar";
import { Search } from "../search/Search.jsx";
import { PaginationNumber } from "./PaginationsNumber";
function GoodsList(props) {
	const [grid , setGrid] = useState(4);
	const [amountGoodsOnPage, setAmountGoodsOnPage] = useState(4);
	const {category, numberOfPage = 1} = useParams();//get url
	console.log(category, numberOfPage);
	const dispatch = useDispatch();
	const {status, list, error} = useSelector(selectGoods);//get goods object
	const search = useSelector(selectSearch)//get search from store
	const filteredList = filtredGoods(list, category, search);//create a filtered list,
	// the first parameter is the goods,
	// the second category of goods
	// the third is search from input
	useEffect(()=>{//get a list of products
		dispatch(loadGoods());
	}, [numberOfPage]);
	const setDoubleGrid = () =>{
	setGrid(2)
	}
	const setFourRowGrid = () =>{
	setGrid(4)
	} //Functions for handle grid`s format 
	//Pagination
	const lastGoodsIndex = numberOfPage * amountGoodsOnPage;
	const firstGoodsIndex = lastGoodsIndex - amountGoodsOnPage;
	const paginationGoods = filteredList.slice(firstGoodsIndex, lastGoodsIndex);
	return(
		<main className="main container">
			<Search/>
			<div className="container__grid">
				<div className="grid__two grid_item" onClick={setDoubleGrid}>
					<div className="two__item"></div>
					<div className="two__item"></div>
				</div>
				<div className="grid__four grid_item" onClick={setFourRowGrid}>
					<div className="four__item"></div>
					<div className="four__item"></div>
					<div className="four__item"></div>
					<div className="four__item"></div>
				</div>
			</div>
			<div className="container__conetent">
				<Sidebar/>
				<div className="content__row">
				{
					status === "loading" && <h1>Loading...</h1>
				}
				{
					status === "rejected" && <h1>{error}</h1>
				}
				{
					status === "fuilfilled" && paginationGoods.map((good) => <GoodsItem key={good.id} {...good} gridsFormat={grid}/>)
				}
				</div>
			</div>
			<PaginationNumber amountGoodsOnPage={amountGoodsOnPage} totalAmountGoods = {filteredList.length} category={category} />
		</main>
	)
}

export {GoodsList};
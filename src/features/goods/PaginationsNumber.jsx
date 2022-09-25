//instrumens
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
//Actions
import {setCurrentGoods} from "../goods/goods-slice";
function PaginationNumber(props) {
	const dispatch = useDispatch();
	const pageNumber = [];
	const {amountGoodsOnPage, totalAmountGoods, category} = props;
	for(let i =0; i < totalAmountGoods/amountGoodsOnPage; i++){
		pageNumber.push(i);
	}
	return(
		<ul className="pagination__list">
		{
			pageNumber.map(number =>
			<li  key={number} onClick={() =>{
				dispatch(setCurrentGoods(number+1))
			}}>
				{
					category ? <Link className="pagination__link" to={`/goods/${category}/path/${number+1}`}>{number+1}</Link>
					  : <Link className="pagination__link" to={`/goods/path/${number+1}`}>{number+1}</Link>   
				}
			</li>)
		}
		</ul>
	)
}

export {PaginationNumber}
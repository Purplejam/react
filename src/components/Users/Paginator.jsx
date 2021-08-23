import React, {useState} from 'react';
import css from './Users.module.css';


const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++ ) {
		pages.push(i);
	}


	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setportionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={css.pagination}>
			{ portionNumber > 1 && 
				<button onClick={() => {setportionNumber(portionNumber - 1)}}>PREV</button>}


			{pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => {
				return <span onClick={(e) => {onPageChanged(p)}} 
				className={currentPage === p && css.selectedPage}>{p}</span>
				})}

				{portionCount > portionNumber && 
					<button onClick={() => {setportionNumber(portionNumber + 1)}}>NEXT</button>}
			

		</div>
)
}

export default Paginator
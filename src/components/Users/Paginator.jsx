import React from 'react';
import css from './Users.module.css';


const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

	let pagesCount = Math.ceil(totalUsersCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++ ) {
		pages.push(i);
	}

	return (
		<div className={css.pagination}>
			{pages.map(p => {
				return <span onClick={(e) => {onPageChanged(p)}} className={ currentPage === p && css.selectedPage }>{p}</span>
				})}

		</div>
)
}

export default Paginator
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ item }) => {
	const sign = item.amount > 0 ? '+$' : '-$'
	const { deleteTransaction } = useContext(GlobalContext)

	return (
		<li className={item.amount > 0 ? 'plus' : 'minus'}>
			{item.text}<span>{sign}{numberWithCommas(Math.abs(item.amount))}</span>
			<button onClick={() => deleteTransaction(item._id)} className="delete-btn">x</button>
		</li>
	)
}

import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'
import Spinner from '../components/Spinner'

export const TransactionList = () => {
	const { transactions, getTransactions } = useContext(GlobalContext)

	useEffect(() => {
		getTransactions()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (transactions === undefined || transactions.length ===0) {
		return <Spinner />
	} else {
		return (
		<>
			<h3>History</h3>
			<ul id="list" className="list">
				{transactions.map(item => (
					<Transaction key={item._id} item={item}/>
				))}
			</ul>			
		</>
		)
	}
}

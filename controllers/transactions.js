const Transaction  = require('../model/Transaction')

// @desc get transactions
// @route GET "/api/v1/transactions"

exports.getTransactions = async (req, res, next) => {
	try {
		const transactions = await Transaction.find()
		return res.status(200).json({
			success: true,
			id: transactions.length,
			data: transactions
		})
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Server error'
		})
	}
}

// @desc add transaction
// @route POST "/api/v1/transactions"

exports.addTransaction = async (req, res, next) => {
	try {
		const { text, amount } = req.body
		const transactions = await Transaction.create(req.body)
		return res.status(201).json({
			success: true,
			data: transactions
		})
	} catch (err) {
		if (err.name === 'ValidationError') {
			const messages = Object.values(err.errors).map(item => item.message)
				return res.status(400).json({
					success: false,
					error: messages
				})
			} else {
				return res.status(500).json({
					success: false,
					error: 'Server Error'
				})
			}
	}
}
	
// @desc delete transaction
// @route DELETE "/api/v1/transactions/:id"

exports.deleteTransaction = async (req, res, next) => {
	try {
		const transaction = await Transaction.findById(req.params.id)
		if (!transaction) {
			res.status(400).json({
				success: false,
				error: 'Transaction not found'
			})
		}
		await transaction.remove()
		await res.status(200).json({
			success: true,
			message: 'Transaction successfuly deleted'
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Transaction was not found'
		})
	}
}

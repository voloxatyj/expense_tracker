const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useCreateIndex: true,
			useNewUrlParser: true
		})

		console.log(`MongoDB Connect: ${conn.connection.host}`.cyan)
	} catch (err) {
		console.log(`Error: ${err.message}`.red)
	}
}

module.exports = connectDB;
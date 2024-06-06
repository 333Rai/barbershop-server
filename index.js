require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appointmentRouter = require('./routers/appointmentRouter');

const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);
app.use('/api/v1/appointments', appointmentRouter);

const startServer = () => {
	app.listen(PORT, () =>
		console.log(`The server is running on port ${PORT}!`)
	);
};
startServer();

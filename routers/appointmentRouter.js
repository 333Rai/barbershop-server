const Router = require('express');
const appointmentController = require('../controllers/appointmentController');

const appointmentRouter = new Router();

appointmentRouter.post('', appointmentController.makeAnAppointment);

module.exports = appointmentRouter;

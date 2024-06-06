const appointmentService = require('../services/appointmentService');

class AppointmentController {
	async makeAnAppointment(req, res) {
		try {
			const { name, email, phone, date, time, barber, service } =
				req.body;
			const data = await appointmentService.makeAnAppointment({
				name,
				email,
				phone,
				date,
				time,
				barber,
				service,
			});
			res.json(data);
		} catch (error) {
			//
		}
	}
}

module.exports = new AppointmentController();

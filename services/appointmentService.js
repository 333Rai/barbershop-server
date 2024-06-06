const nodemailer = require('nodemailer');

class AppointmentService {
	async makeAnAppointment(data) {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'zheenbekov.rai333@gmail.com',
				pass: 'vfms uaoc evjq dyky',
			},
		});
		const mailOptions = {
			from: data.email,
			to: 'alymzhaz@gmail.com',
			subject: 'Make an appointment with a hairdresser',
			text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDate: ${data.date}\nTime: ${data.time}\nBarber: ${data.barber}\nService: ${data.service}`,
		};
		const appointment = await transporter.sendMail(mailOptions);
		return appointment;
	}
}

module.exports = new AppointmentService();

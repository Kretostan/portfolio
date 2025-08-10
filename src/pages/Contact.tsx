import axios from "axios";

import Title from '../components/ui/Title';
import Button from "../components/ui/Button";

const ContactPage = () => {
	const handleSendMail = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const jsonData= Object.fromEntries(formData.entries());
		try {
			await axios.post(import.meta.env.VITE_API_URL + "/send-mail", jsonData);
			form.reset();
		} catch (error) {
			console.error("Error sending mail: ", error);
			alert("Failed to send mail. Please try again later.");
		}
	}

	return <section className="flex flex-col items-center gap-10 sm:gap-14 py-14">
		<Title>Hit Me Up</Title>
		<p className="flex items-center justify-center mx-14 md:mx-10 max-w-[400px] md:text-lg text-center">
			Need to get in touch? Fill out the form below and press &ldquo;Send&ldquo; button
		</p>
		<form onSubmit={handleSendMail} className="px-8 py-6 max-w-[500px] bg-bg-theme-2 rounded-xl">
			<div>
				<div className="flex flex-col py-2 text-sm">
					<label id="name" htmlFor="name" className="py-1">Name:</label>
					<input type="text" name="name" placeholder="Name..." className={"px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]"} required />
				</div>
				<div className="flex flex-col py-2 text-sm">
					<label id="email" htmlFor="email" className="py-1">E-mail:</label>
					<input type="email" name="email" placeholder="E-mail..." className={"px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]"} required />
				</div>
				<div className="flex flex-col py-2 text-sm">
					<label id="subject" htmlFor="subject" className="py-1">Subject:</label>
					<input type="text" name="subject" placeholder="Subject..." className={"px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]"} required />
				</div>
				<div className="flex flex-col py-2 text-sm">
					<label id="message" htmlFor="message" className="py-1">Message:</label>
					<textarea name="message" placeholder="Message..." className="px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]" required />
				</div>
			</div>
			<div className="flex justify-end pt-3 w-full">
				<Button>Send</Button>
			</div>
		</form>
	</section>
};

export default ContactPage;
import axios from "axios";

import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

import type { FormEvent } from "react";

const ContactPage = () => {
  const handleSendMail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    try {
      await axios.post(import.meta.env.VITE_API_URL + "/send-mail", jsonData);
      form.reset();
    } catch (error) {
      // TODO
      console.error("Error sending mail: ", error);
      alert("Failed to send mail. Please try again later.");
    }
  };

  return (
    <>
      <Title>Hit Me Up</Title>
      <p className="flex items-center justify-center mx-14 md:mx-10 max-w-[400px] md:text-lg text-center">
        Need to get in touch? Fill out the form below and
        press&ldquo;Send&ldquo; button
      </p>
      <form
        onSubmit={handleSendMail}
        className="mx-3 sm:mx-0 p-8 sm:max-w-[500px] sm:w-full bg-bg-theme-2 rounded-xl ring"
      >
        <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-4">
          <div className="flex flex-col py-2 w-full text-sm">
            <label id="name" htmlFor="name">
              Full Name:
            </label>
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className="flex flex-col py-2 w-full text-sm">
            <label id="email" htmlFor="email">
              E-mail:
            </label>
            <input type="email" name="email" placeholder="E-mail" required />
          </div>
        </div>
        <div className="flex flex-col py-2 text-sm">
          <label id="subject" htmlFor="subject">
            Subject:
          </label>
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <div className="flex flex-col py-2 text-sm">
          <label id="message" htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            className="min-h-[35px] max-h-[150px]"
            required
          />
        </div>
        <div className="flex justify-end pt-6 w-full">
          <Button>Send</Button>
        </div>
      </form>
    </>
  );
};

export default ContactPage;

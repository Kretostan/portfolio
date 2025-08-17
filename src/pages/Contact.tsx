import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigate, useNavigation } from "react-router";
import axios from "axios";

import Title from "../components/UI/Title";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal.tsx";

import type { RootState } from "../store/store.ts";
import { closeModal, showModal } from "../store/modalSlice.ts";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const jsonData = Object.fromEntries(formData.entries());
  try {
    await axios.post(
      import.meta.env.VITE_API_URL + "/send-mail",
      JSON.stringify(jsonData),
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    return { success: true };
  } catch (error) {
    console.error("Error sending mail: ", error);
    return null;
  }
};

const ContactPage = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const data = useActionData() as { success?: boolean };
  const isModal = useSelector((state: RootState) => state.modal.isModal);
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (data?.success === true) {
      dispatch(showModal());
      formRef.current?.reset();
    }
  }, [data, dispatch]);

  return (
    <>
      <Title>Get In Touch</Title>
      <div className="flex flex-col items-center">
        <p>Have a question or a project in mind?</p>
        <p>Fill out the form and hit “Send”.</p>
      </div>
      <Form
        ref={formRef}
        method="post"
        className="mx-3 sm:mx-0 p-8 sm:max-w-[500px] sm:w-full bg-bg-theme-2 rounded-xl ring"
        replace
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
            placeholder="Put your message"
          />
        </div>
        <div className="flex justify-end pt-6 w-full">
          <Button>
            {navigation.state === "submitting" ? "Sending" : "Send"}
          </Button>
        </div>
      </Form>
      <Modal
        open={isModal}
        onClose={() => {
          dispatch(closeModal());
          navigate(".", { replace: true });
        }}
      >
        {data?.success === true && <p>Message sent successfully!</p>}
        {data?.success === false && <p>Error while sending mail.</p>}
        <div className="opacity-60">
          <p>Wiadomość kontaktowa została wysłana pomyślnie.</p>
          <p>Spróbuję sie skontaktować z Tobą jak najszybciej!</p>
        </div>
        <Button
          onClick={() => {
            dispatch(closeModal());
            navigate(".", { replace: true });
          }}
        >
          Okay
        </Button>
      </Modal>
    </>
  );
};

export default ContactPage;

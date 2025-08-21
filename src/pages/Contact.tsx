import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigate, useNavigation } from "react-router";
import axios from "axios";

import Title from "../components/UI/Title";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal.tsx";

import type { RootState } from "../store/store.ts";
import { closeModal, showModal } from "../store/modalSlice.ts";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  useEffect(() => {
    if (data?.success === true) {
      dispatch(showModal());
      formRef.current?.reset();
    }
  }, [data, dispatch]);

  return (
    <>
      <Title>{t("contact.title")}</Title>
      <div className="flex flex-col items-center">
        <p>{t("contact.subtitle-1")}</p>
        <p>{t("contact.subtitle-2")}</p>
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
              {t("contact.labelName")}:
            </label>
            <input
              type="text"
              name="name"
              placeholder={t("contact.labelName")}
              required
            />
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
            {t("contact.labelSubject")}:
          </label>
          <input
            type="text"
            name="subject"
            placeholder={t("contact.labelSubject")}
            required
          />
        </div>
        <div className="flex flex-col py-2 text-sm">
          <label id="message" htmlFor="message">
            {t("contact.labelMessage")}:
          </label>
          <textarea
            name="message"
            className="min-h-[35px] max-h-[150px]"
            placeholder={t("contact.messagePlaceholder")}
            required
          />
        </div>
        <div className="flex justify-end pt-6 w-full">
          <Button>
            {navigation.state === "submitting"
              ? "Sending"
              : t("contact.button")}
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
        <img
          src={
            data?.success === true
              ? "/icons/check-mark.svg"
              : "/icons/error-mark.svg"
          }
          alt={data?.success ? "Success" : "Fail"}
          width={38}
        />
        <div className="text-center text-sm opacity-60">
          <p>{t("contact.modalMessage-1")}</p>
          <p>{t("contact.modalMessage-2")}</p>
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

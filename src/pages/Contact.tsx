import {useEffect, useRef, useState} from "react";
import { Form, useActionData, useNavigate, useNavigation } from "react-router";
import {motion} from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal.tsx";

const ContactPage = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const data = useActionData() as { success?: boolean };
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data?.success === true) {
      formRef.current?.reset();
      setIsOpen(true);
    }
  }, [data]);

  return <div className="flex flex-col justify-center items-center gap-14 pt-36 pb-18 min-h-screen bg-bg-theme-1">
    <div className="flex flex-col items-center gap-8 md:text-lg">
      <h1 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-5xl text-accent-theme-2 font-bold font-header">{t("contact.title")}</h1>
      <p>{t("contact.subtitle")}</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-16 isolate max-w-[7flex flex-col w-full gap-3">
      <Form
        ref={formRef}
        method="post"
        className="mx-3 sm:mx-0 p-8 max-w-[600px] w-full bg-bg-theme-2 rounded-xl ring-2 ring-accent-theme-1"
        replace
      >
        <div className="flex sm:flex-row flex-col items-center justify-between md:gap-6">
          <div className="flex flex-col gap-3 py-2 w-full md:w-1/2">
            <label id="name" htmlFor="name" className="text-accent-theme-1">
              {t("contact.labelName")}:
            </label>
            <motion.input
              whileFocus={{ outlineColor: "var(--accent-color-2)", outlineWidth: 2, boxShadow: "0 2px 10px 1px var(--accent-color-2)" }}
              type="text"
              name="name"
              placeholder={t("contact.labelName")}
              required
              className="p-3 bg-bg-content outline-2 outline-accent-theme-1 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3 py-2 w-full md:w-1/2">
            <label id="email" htmlFor="email" className="text-accent-theme-1">
              E-mail:
            </label>
            <motion.input whileFocus={{ outlineColor: "var(--accent-color-2)", outlineWidth: 2, boxShadow: "0 2px 10px 1px var(--accent-color-2)" }} type="email" name="email" placeholder="E-mail" required className="p-3 bg-bg-content outline-2 outline-accent-theme-1 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col gap-3 py-2">
          <label id="subject" htmlFor="subject" className="text-accent-theme-1">
            {t("contact.labelSubject")}:
          </label>
          <motion.input
            whileFocus={{ outlineColor: "var(--accent-color-2)", outlineWidth: 2, boxShadow: "0 2px 10px 1px var(--accent-color-2)" }}
            type="text"
            name="subject"
            placeholder={t("contact.labelSubject")}
            required
            className="p-3 bg-bg-content outline-2 outline-accent-theme-1 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 py-2">
          <label id="message" htmlFor="message" className="text-accent-theme-1">
            {t("contact.labelMessage")}:
          </label>
          <motion.textarea
            whileFocus={{ outlineColor: "var(--accent-color-2)", outlineWidth: 2, boxShadow: "0 2px 10px 1px var(--accent-color-2)" }}
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            required
            className="p-3 min-h-[100px] max-h-[200px] bg-bg-content outline-2 outline-accent-theme-1 rounded-lg"
          />
        </div>
        <Button className="mt-6 w-full">
          {navigation.state === "submitting"
            ? "Sending"
            : t("contact.button")}
        </Button>
      </Form>
      <div className="flex flex-col md:flex-row justify-around gap-4 mx-3 md:mx-0 max-w-[800px] w-full text-center">
        <div className="flex flex-col gap-3 border-2 border-accent-theme-1 rounded-xl py-8 md:w-1/3 w-full bg-bg-theme-2">
          <h4 className="text-accent-theme-1 font-bold text-lg">Email</h4>
          <p>kretostan@portfolio.com</p>
        </div>
        <div className="flex flex-col gap-3 border-2 border-accent-theme-1 rounded-xl py-8 md:w-1/3 w-full bg-bg-theme-2">
          <h4 className="text-accent-theme-1 font-bold text-lg">{t("contact.belowForm-1")}</h4>
          <p>{t("contact.belowForm-1-1")}</p>
        </div>
        <div className="flex flex-col gap-3 border-2 border-accent-theme-1 rounded-xl py-8 md:w-1/3 w-full bg-bg-theme-2">
          <h4 className="text-accent-theme-1 font-bold text-lg">{t("contact.belowForm-2")}</h4>
          <p>24-48 hours</p>
        </div>
      </div>
    </div>
    <Modal
      open={isOpen}
      onClose={() => {
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
        <p>{t("contact.modalMessage")}</p>
      </div>
      <Button
        onClick={() => {
          navigate(".", { replace: true });
          setIsOpen(false);
        }}
      >
        Close
      </Button>
    </Modal>
  </div>;
};

export default ContactPage;

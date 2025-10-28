import {useEffect, useRef, useState} from "react";
import {Form, useActionData, useNavigate, useNavigation} from "react-router";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal.tsx";
import Info from "../components/Contact/Info.tsx";

const ContactPage = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const data = useActionData() as { success: boolean, message: string, isValid?: boolean[] };
  const formRef = useRef<HTMLFormElement>(null);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean[] | undefined>(undefined);

  useEffect(() => {
    document.title = i18n.language === "pl"
      ? "Kontakt | Kretostan Portfolio"
      : "Contact | Kretostan Portfolio";
  }, [i18n.language]);

  useEffect(() => {
    if (!data) return;
    if (data?.success === true) {
      formRef.current?.reset();
      setIsOpen(true);
      setInvalid(undefined);
      setError("");
    } else if (data?.success === false && data?.isValid && data.isValid.length > 0) {
      setInvalid(data.isValid.map(value => !value));
      setError(data?.message);
    } else {
      setInvalid(undefined);
      setError(data?.message);
    }
  }, [data, setError, setInvalid]);

  return <div className="flex flex-col justify-center items-center gap-14 pt-36 pb-18 min-h-screen bg-bg-theme-1">
    <div className="flex flex-col items-center gap-8">
      <h1 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-4xl sm:text-5xl text-transparent bg-clip-text bg-linear-to-r from-accent-theme-1 to-accent-theme-2 font-bold font-header">{t("contact.title")}</h1>
      <p className="text-sm">{t("contact.subtitle")}</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-16 px-4 md:px-6 isolate max-w-[800px] w-full">
      <Form
        ref={formRef}
        method="post"
        className="mx-3 md:mx-0 p-8 w-full bg-bg-theme-2 rounded-xl ring-2 ring-accent-theme-1"
        replace
      >
        <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-6">
          <div className="flex flex-col gap-3 py-2 w-full md:w-1/2">
            <motion.label
              animate={{
                color: invalid?.[0] ? "var(--error-label)" : "var(--accent-color-1)"
              }}
              id="name"
              htmlFor="name"
              className={invalid?.[0] ? "text-error-label-color" : "text-accent-theme-1"}
            >
              {t("contact.labelName")}:
            </motion.label>
            <motion.input
              whileFocus={{
                boxShadow: `0 2px 10px 1px ${invalid?.[0] ? "var(--error-color)" : "var(--accent-color-1)"}`
              }}
              animate={{
                borderColor: invalid?.[0] ? "var(--error-color)" : "var(--accent-color-1)",
                backgroundColor: invalid?.[0] ? "var(--error-background)" : "var(--background-content)",
                boxShadow: "none"
              }}
              type="text"
              name="name"
              placeholder={t("contact.labelName")}
              className="p-3 rounded-lg outline-none border-2"
            />
          </div>
          <div className="flex flex-col gap-3 py-2 w-full md:w-1/2">
            <motion.label
              animate={{
                color: invalid?.[1] ? "var(--error-label)" : "var(--accent-color-1)"
              }}
              id="email"
              htmlFor="email"
              className={invalid?.[1] ? "text-error-label-color" : "text-accent-theme-1"}
            >
              E-mail:
            </motion.label>
            <motion.input
              whileFocus={{
                boxShadow: `0 2px 10px 1px ${invalid?.[2] ? "var(--error-color)" : "var(--accent-color-1)"}`
              }}
              animate={{
                borderColor: invalid?.[1] ? "var(--error-color)" : "var(--accent-color-1)",
                backgroundColor: invalid?.[1] ? "var(--error-background)" : "var(--background-content)",
                boxShadow: "none"
              }}
              type="email"
              name="email"
              placeholder="E-mail"
              className="p-3 rounded-lg outline-none border-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 py-2 isolate">
          <motion.label
            animate={{
              color: invalid?.[2] ? "var(--error-label)" : "var(--accent-color-1)"
            }}
            id="subject"
            htmlFor="subject"
            className={invalid?.[2] ? "text-error-label-color" : "text-accent-theme-1"}
          >
            {t("contact.labelSubject")}:
          </motion.label>
          <motion.input
            whileFocus={{
              boxShadow: `0 2px 10px 1px ${invalid?.[3] ? "var(--error-color)" : "var(--accent-color-1)"}`
            }}
            animate={{
              borderColor: invalid?.[2] ? "var(--error-color)" : "var(--accent-color-1)",
              backgroundColor: invalid?.[2] ? "var(--error-background)" : "var(--background-content)",
              boxShadow: "none"
            }}
            type="text"
            name="subject"
            placeholder={t("contact.labelSubject")}
            className="p-3 rounded-lg outline-none border-2"
          />
        </div>
        <div className="flex flex-col gap-3 py-2 isolate">
          <motion.label
            animate={{
              color: invalid?.[3] ? "var(--error-label)" : "var(--accent-color-1)"
            }}
            id="message"
            htmlFor="message"
            className={invalid?.[3] ? "text-error-label-color" : "text-accent-theme-1"}
          >
            {t("contact.labelMessage")}:
          </motion.label>
          <motion.textarea
            whileFocus={{
              boxShadow: `0 2px 10px 1px ${invalid?.[3] ? "var(--error-color)" : "var(--accent-color-1)"}`
            }}
            animate={{
              borderColor: invalid?.[3] ? "var(--error-color)" : "var(--accent-color-1)",
              backgroundColor: invalid?.[3] ? "var(--error-background)" : "var(--background-content)",
              boxShadow: "none"
            }}
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            className="p-3 rounded-lg outline-none border-2"
          />
        </div>
        <p className="text-error-color">{error}</p>
        <Button className="mt-6 w-full bg-linear-to-r from-accent-theme-1 to-accent-theme-2">
          {navigation.state === "submitting"
            ? "Sending"
            : t("contact.button")}
        </Button>
      </Form>
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-4 mx-3 md:mx-0 w-full text-center">
        <Info title="Email">kretostan@portfolio.com</Info>
        <Info title={t("contact.belowForm-1")}>{t("contact.belowForm-1-1")}</Info>
        <Info title={t("contact.belowForm-2")}>24-48 {t("contact.belowForm-2-2")}</Info>
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

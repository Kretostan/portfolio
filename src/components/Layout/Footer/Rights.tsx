import {useTranslation} from "react-i18next";

const Rights = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return <p className="flex gap-0.25">
    <span className="flex text-base">&copy;</span>
    {currentYear} Jakub Kret. {t("footer.rights")}
  </p>;
};

export default Rights;

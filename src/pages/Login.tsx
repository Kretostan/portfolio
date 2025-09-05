import { type FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import axios, { type AxiosResponse } from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { login } from "../store/authSlice.ts";
import Button from "../components/UI/Button.tsx";
import Title from "../components/UI/Title.tsx";

type loginResponse = {
  token: string;
  role: string;
  success: boolean;
};

const LoginPage = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const response: AxiosResponse<loginResponse> = await axios.post(
      import.meta.env.VITE_API_URL + "/login",
      jsonData,
      {
        withCredentials: true,
      },
    );

    if (response.data.success) {
      dispatch(login({ isLoggedIn: true, role: response.data.role }));
      return navigate("/");
    }
    setError(true);
  };

  return (
    <>
      <Title>{t("login.title")}</Title>
      <div className="flex flex-col items-center gap-10">
        <p>{t("login.subtitle")}</p>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center gap-3 w-[300px] ring-1 bg-bg-theme-2 rounded-lg p-6"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="email">{t("login.labelEmail")}:</label>
              <input
                type="email"
                name="email"
                placeholder={t("login.labelEmail")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">{t("login.labelPassword")}:</label>
              <input
                type="password"
                name="password"
                placeholder={t("login.labelPassword")}
              />
            </div>
          </div>
          <p
            className={`${error ? "visible" : "invisible"} text-[var(--error-color)] text-sm`}
          >
            {t("login.errorInvalid")}
          </p>
          <Button className="flex w-full justify-center">
            {t("login.buttonLogin")}
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

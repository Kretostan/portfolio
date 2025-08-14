import { type FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import axios, { type AxiosResponse } from "axios";

import { login } from "../store/authSlice.ts";
import Button from "../components/ui/Button.tsx";
import Title from "../components/ui/Title.tsx";

type loginResponse = {
  token: string;
  role: string;
  success: boolean;
};

const LoginPage = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

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
      dispatch(login({ token: response.data.token, role: response.data.role }));
      return (window.location.href = "/");
    }
    setError(true);
  };

  return (
    <>
      <Title>Login Page</Title>
      <div className="flex flex-col justify-center items-center p-6 bg-bg-theme-2 rounded-lg ring-1">
        <form onSubmit={handleLogin} className="flex flex-col gap-3 w-[250px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <p
            className={`${error ? "visible" : "invisible"} text-[var(--error-color)] text-sm`}
          >
            Email or password incorrect
          </p>
          <div className="flex items-center justify-center pt-4">
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

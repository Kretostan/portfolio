import axios from "axios";
import {useDispatch} from "react-redux";

import type {AppDispatch} from "../store/store.ts";
import {login} from "../store/authSlice.ts";

const LoginPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const response = await axios.post(import.meta.env.VITE_API_URL + "/login", jsonData, {
      withCredentials: true, // Włącz przesyłanie cookies
    });
    dispatch(login({token: response.data.token, role: response.data.role}));
  }

  return <div className="flex flex-col justify-center items-center bg-bg-theme-2">
    <h1 className="text-3xl font-bold mb-4">Login Page</h1>
    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          placeholder="Type your e-mail"
          className="p-2 border border-accent-theme-1 rounded"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Type your password"
          className="p-2 border border-accent-theme-1 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-accent-theme-1 text-bg-theme-2 p-2 rounded hover:bg-accent-theme-2 transition-colors"
      >
        Login
      </button>
    </form>
  </div>
};

export default LoginPage;

import axios from "axios";

export const contactAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const jsonData = Object.fromEntries(formData.entries());
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/send-mail",
      JSON.stringify(jsonData),
      {
        headers: { "Content-Type": "application/json" },
        validateStatus: () => true,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error sending mail: ", error);
    return null;
  }
};

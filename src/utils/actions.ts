import axios from "axios";

export const contactAction = async ({ request }: { request: Request }) => {
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

import { type FormEvent, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store.ts";

import Title from "../../components/UI/Title.tsx";
import Button from "../../components/UI/Button.tsx";
import ProtectedRoute from "../../components/ProtectedRoute.tsx";

const CreatorPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);
  const [descLang, setDescLang] = useState<"en" | "pl">("en");
  // TODO: Show desc input based on descIndex
  // const [descIndex, setDescIndex] = useState<number>(0);

  if (!auth.isLoggedIn && auth.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const handleAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/projects",
      jsonData,
      {
        withCredentials: true,
      },
    );
    if (response.status === 201) {
      navigate("/projects");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center gap-16">
        <Title>Creator Page</Title>
        <form
          onSubmit={handleAddProject}
          className="flex flex-col gap-2 mx-3 sm:mx-0 p-8 bg-bg-theme-2 rounded-xl ring"
        >
          <div className="flex flex-col gap-4">
            <div>
              <div>
                <label htmlFor="title" className="text-error-label-color">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  className="bg-error-bg-color border-1 border-error-label-color placeholder:text-error-color"
                />
              </div>
              <div>
                <label htmlFor="image">Project Image</label>
                <input type="text" id="image" name="image" placeholder="AWS S3" />
              </div>
              <div>
                <label htmlFor="url">Project URL</label>
                <input type="text" id="url" name="url" placeholder="Page URL" />
              </div>
              <div>
                <label htmlFor="github">Project Repo</label>
                <input type="text" id="github" name="github" placeholder="Repo" />
              </div>
            </div>
            <div>
              <div className="relative w-[300px]">
                <div>
                  <h3 className="font-semibold text-center pb-4">
                    Description ({descLang.toUpperCase()})
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      setDescLang((prev) => (prev === "pl" ? "en" : "pl"))
                    }
                    className="absolute top-0 right-0 text-lg cursor-pointer"
                  >
                    ✅
                  </button>
                </div>
                <div
                  className={`absolute top-10 left-0 ${descLang === "en" ? "visible" : "hidden"}`}
                >
                  <div>
                    <div>
                      <label htmlFor={`firstDescriptionTitleEN`}>
                        Description Title
                      </label>
                      <textarea
                        id={`firstDescriptionTitleEN`}
                        name={`firstDescriptionTitleEN`}
                        placeholder={`First Title (EN)`}
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor={`firstDescriptionTextEN`}>
                        Description Text
                      </label>
                      <textarea
                        id={`firstDescriptionTextEN`}
                        name={`firstDescriptionTextEN`}
                        placeholder={`First Text (EN)`}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor={`secondDescriptionTitleEN`}>
                        Description Title
                      </label>
                      <textarea
                        id={`secondDescriptionTitleEN`}
                        name={`secondDescriptionTitleEN`}
                        placeholder={`Second Title (EN)`}
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor={`secondDescriptionTextEN`}>
                        Description Text
                      </label>
                      <textarea
                        id={`secondDescriptionTextEN`}
                        name={`secondDescriptionTextEN`}
                        placeholder={`Second Text (EN)`}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor={`thirdDescriptionTitleEN`}>
                        Description Title
                      </label>
                      <textarea
                        id={`thirdDescriptionTitleEN`}
                        name={`thirdDescriptionTitleEN`}
                        placeholder={`Third Title (EN)`}
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor={`thirdDescriptionTextEN`}>
                        Description Text
                      </label>
                      <textarea
                        id={`thirdDescriptionTextEN`}
                        name={`thirdDescriptionTextEN`}
                        placeholder={`Third Text (EN)`}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor={`fourthDescriptionTitleEN`}>
                        Description Title
                      </label>
                      <textarea
                        id={`fourthDescriptionTitleEN`}
                        name={`fourthDescriptionTitleEN`}
                        placeholder={`Fourth Title (EN)`}
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor={`fourthDescriptionTextEN`}>
                        Description Text
                      </label>
                      <textarea
                        id={`fourthDescriptionTextEN`}
                        name={`fourthDescriptionTextEN`}
                        placeholder={`Fourth Text (EN)`}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute top-10 left-0 ${descLang === "pl" ? "visible" : "hidden"}`}
                >
                  <div>
                    <div>
                      <label
                        htmlFor={`firstDescriptionTitle${descLang.toUpperCase()}`}
                      >
                        Description Title
                      </label>
                      <textarea
                        id={`firstDescriptionTitle${descLang.toUpperCase()}`}
                        name={`firstDescriptionTitle${descLang.toUpperCase()}`}
                        placeholder={`Title (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor={`firstDescriptionText${descLang.toUpperCase()}`}
                      >
                        Description Text
                      </label>
                      <textarea
                        id={`firstDescriptionText${descLang.toUpperCase()}`}
                        name={`firstDescriptionText${descLang.toUpperCase()}`}
                        placeholder={`Text (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor={`secondDescriptionTitle${descLang.toUpperCase()}`}
                      >
                        Description Title
                      </label>
                      <textarea
                        id={`secondDescriptionTitle${descLang.toUpperCase()}`}
                        name={`secondDescriptionTitle${descLang.toUpperCase()}`}
                        placeholder={`Title (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor={`secondDescriptionText${descLang.toUpperCase()}`}
                      >
                        Description Text
                      </label>
                      <textarea
                        id={`secondDescriptionText${descLang.toUpperCase()}`}
                        name={`secondDescriptionText${descLang.toUpperCase()}`}
                        placeholder={`Text (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor={`thirdDescriptionTitle${descLang.toUpperCase()}`}
                      >
                        Description Title
                      </label>
                      <textarea
                        id={`thirdDescriptionTitle${descLang.toUpperCase()}`}
                        name={`thirdDescriptionTitle${descLang.toUpperCase()}`}
                        placeholder={`Title (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor={`thirdDescriptionText${descLang.toUpperCase()}`}
                      >
                        Description Text
                      </label>
                      <textarea
                        id={`thirdDescriptionText${descLang.toUpperCase()}`}
                        name={`thirdDescriptionText${descLang.toUpperCase()}`}
                        placeholder={`Text (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor={`fourthDescriptionTitle${descLang.toUpperCase()}`}
                      >
                        Description Title
                      </label>
                      <textarea
                        id={`fourthDescriptionTitle${descLang.toUpperCase()}`}
                        name={`fourthDescriptionTitle${descLang.toUpperCase()}`}
                        placeholder={`Title (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor={`fourthDescriptionText${descLang.toUpperCase()}`}
                      >
                        Description Text
                      </label>
                      <textarea
                        id={`fourthDescriptionText${descLang.toUpperCase()}`}
                        name={`fourthDescriptionText${descLang.toUpperCase()}`}
                        placeholder={`Text (${descLang.toUpperCase()})`}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-error-color">Field cannot be empty</p>
            <div className="flex justify-center items-center pt-4">
              <Button>Add</Button>
            </div>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default CreatorPage;

import { type ChangeEvent, type FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import type { Project } from "../../@types";
import Button from "../UI/Button.tsx";

type Lang = "pl" | "en";

const Updater = ({ project }: { project: Project }) => {
  const [formData, setFormData] = useState<Project>(project);
  const navigate = useNavigate();
  const [descLang, setDescLang] = useState<"en" | "pl">("en");
  const { i18n } = useTranslation();
  const lang = i18n.language as Lang;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevProject) => {
      return {
        ...prevProject,
        [name]: value,
      };
    });
  };

  const onSubmitUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.patch(
      import.meta.env.VITE_API_URL + "/projects/" + project.slug,
      formData,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    if (response.status === 200) {
      navigate("/projects");
    }
  };

  return (
    <form
      onSubmit={onSubmitUpdate}
      className="px-8 py-6 max-w-[500px] bg-bg-theme-2 rounded-xl"
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
              value={formData.title}
              onChange={handleChange}
              className="bg-error-bg-color border-1 border-error-label-color placeholder:text-error-color"
            />
          </div>
          <div>
            <label htmlFor="image">Project Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="AWS S3"
            />
          </div>
          <div>
            <label htmlFor="url">Project URL</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Page URL"
            />
          </div>
          <div>
            <label htmlFor="github">Project Repo</label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Repo"
            />
          </div>
        </div>
        <div>
          <div className="relative w-[300px] h-[225px]">
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
                  <input
                    id={`firstDescriptionTitleEN`}
                    name={`firstDescriptionTitleEN`}
                    value={formData.description[0].title[lang]}
                    onChange={handleChange}
                    placeholder={`First Title (EN)`}
                  ></input>
                </div>
                <div>
                  <label htmlFor={`firstDescriptionTextEN`}>
                    Description Text
                  </label>
                  <textarea
                    id={`firstDescriptionTextEN`}
                    name={`firstDescriptionTextEN`}
                    value={formData.description[0].text[lang]}
                    onChange={handleChange}
                    placeholder={`First Text (EN)`}
                  ></textarea>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor={`secondDescriptionTitleEN`}>
                    Description Title
                  </label>
                  <input
                    id={`secondDescriptionTitleEN`}
                    name={`secondDescriptionTitleEN`}
                    value={formData.description[1].title[lang]}
                    onChange={handleChange}
                    placeholder={`Second Title (EN)`}
                  ></input>
                </div>
                <div>
                  <label htmlFor={`secondDescriptionTextEN`}>
                    Description Text
                  </label>
                  <textarea
                    id={`secondDescriptionTextEN`}
                    name={`secondDescriptionTextEN`}
                    value={formData.description[1].text[lang]}
                    onChange={handleChange}
                    placeholder={`Second Text (EN)`}
                  ></textarea>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor={`thirdDescriptionTitleEN`}>
                    Description Title
                  </label>
                  <input
                    id={`thirdDescriptionTitleEN`}
                    name={`thirdDescriptionTitleEN`}
                    value={formData.description[2].title[lang]}
                    onChange={handleChange}
                    placeholder={`Third Title (EN)`}
                  ></input>
                </div>
                <div>
                  <label htmlFor={`thirdDescriptionTextEN`}>
                    Description Text
                  </label>
                  <textarea
                    id={`thirdDescriptionTextEN`}
                    name={`thirdDescriptionTextEN`}
                    value={formData.description[2].text[lang]}
                    onChange={handleChange}
                    placeholder={`Third Text (EN)`}
                  ></textarea>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor={`fourthDescriptionTitleEN`}>
                    Description Title
                  </label>
                  <input
                    id={`fourthDescriptionTitleEN`}
                    name={`fourthDescriptionTitleEN`}
                    value={formData.description[3].title[lang]}
                    onChange={handleChange}
                    placeholder={`Fourth Title (EN)`}
                  ></input>
                </div>
                <div>
                  <label htmlFor={`fourthDescriptionTextEN`}>
                    Description Text
                  </label>
                  <textarea
                    id={`fourthDescriptionTextEN`}
                    name={`fourthDescriptionTextEN`}
                    value={formData.description[3].text[lang]}
                    onChange={handleChange}
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
      <div className="flex justify-end pt-3 w-full">
        <Button>Send</Button>
      </div>
    </form>
  );
};

export default Updater;

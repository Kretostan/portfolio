type Description = {
  id: number;
  title: {
    pl: string;
    en: string;
  };
  text: {
    pl: string[];
    en: string[];
  };
};

export type Project = {
  title: string;
  slug: string;
  description: [Description, Description, Description, Description];
  image: string;
  url: string;
  github: string;
};

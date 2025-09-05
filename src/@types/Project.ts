export type Project = {
  title: string;
  slug: string;
  description: [
    {
      id: number;
      title: {
        pl: string;
        en: string;
      };
      text: {
        pl: string[];
        en: string[];
      };
    },
  ];
  image: string;
  url: string;
  github: string;
};

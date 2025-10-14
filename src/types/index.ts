export interface IProject {
  title: string;
  description: {
    en: string;
    pl: string
  };
  stack: string[];
  image: string;
  page: string;
  github: string;
}

export interface ISkill {
  category: {
    en: string;
    pl: string;
  };
  content: {
    en: string;
    pl: string;
  };
}

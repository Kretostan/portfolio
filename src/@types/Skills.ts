type Icon = {
  iconName: string;
  alt: string;
  size: number;
};

export type Skill = {
  skillName: string;
  icons: Icon[];
};

export type Category = {
  id: number;
  name: string;
  fullName: string;
  skills: Skill[];
};

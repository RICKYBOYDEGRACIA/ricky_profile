export type Experience = {
  title: string;
  company: string;
  startEndDate: string;
};
export type TechStack = {
  path: string;
  alt: string;
  tooltip?: string;
  details?: string;
  years?: string;
};

export type Gear = {
  name: string;
  description: string;
  imagePath: string;
  link: string;
  features?: string[];
};
export interface ISkill {
  id: number;
  title: string;
  img: string;
  desc: string;
  link?: string;
}

export interface IContuct {
  id: number;
  img: string;
  contuct: string;
}

export interface IAboutMe {
  jobs: IPractic[];
  contucts: IContuct[];
  trainings: IPractic[];
  works: IWork[];
}
export interface IPractic {
  id: number;
  img: string;
  title: string;
  location: string;
  position: string;
  year: string;
  link?: string;
}

export interface IWork {
  id: number;
  img: string;
  title: string;
  desc: string;
  link?: string;
  stack: string;
}

// https://habrastorage.org/getpro/moikrug/uploads/company/100/007/073/3/logo/medium_12927f35e27c90da24dfe79e8f947e03.jpg

export type Questions = {
  id: number;
  title: string;
  answer: string;
};

export type Videos = {
  id: string;
  title: string;
  link: string;
  questions: Questions[];
};

export type Company = {
  id: string;
  name: string;
};

export type CompanyState = {
  current: boolean;
} & Company;

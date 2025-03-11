import { AuthorityType } from "./authority";

// types.ts
export type GlobalMenuItem = {
  title: string;
  link: string;
  minAuthority: AuthorityType;
  localMenu?: LocalMenuItem[];
};

export type LocalMenuItem = {
  title: string;
  link: string;
  minAuthority: AuthorityType;
  localSubMenu?: LocalSubMenuItem[];
};

export type LocalSubMenuItem = {
  title: string;
  link: string;
  minAuthority: AuthorityType;
};

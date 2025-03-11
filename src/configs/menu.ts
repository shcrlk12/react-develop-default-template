import { Authority, AuthorityType } from "./authority";
import { ROUTES } from "./routes";

export const MENU_ITEMS: GlobalMenuItem[] = [
  {
    title: "User",
    link: ROUTES.USER.URL,
    minAuthority: Authority.Admin,
    localMenu: [
      {
        title: "User information",
        link: ROUTES.USER.children.USER_INFORMATION.URL,
        minAuthority: Authority.Admin,
      },
      {
        title: "User Management",
        link: ROUTES.USER.children.USER_MANAGEMENT.URL,
        minAuthority: Authority.Admin,
      },
    ],
  },
  {
    title: "Tube Aging",
    link: ROUTES.TUBE_AGING.URL,
    minAuthority: Authority.User,
    localMenu: [
      {
        title: "Simulation Data",
        link: ROUTES.TUBE_AGING.children.SIMULATION_DATA.URL,
        minAuthority: Authority.User,
        localSubMenu: [
          {
            title: "Turn On",
            link: ROUTES.TUBE_AGING.children.SIMULATION_DATA.children.TURN_ON
              .URL,
            minAuthority: Authority.User,
          },
          {
            title: "Pre-IV",
            link: ROUTES.TUBE_AGING.children.SIMULATION_DATA.children.PRE_IV
              .URL,
            minAuthority: Authority.User,
          },
        ],
      },
      {
        title: "Select Report",
        link: ROUTES.TUBE_AGING.children.SELECT_REPORT.URL,
        minAuthority: Authority.User,
        localSubMenu: [
          {
            title: "Test1",
            link: ROUTES.TUBE_AGING.children.SELECT_REPORT.children.TEST1.URL,
            minAuthority: Authority.User,
          },
          {
            title: "Test2",
            link: ROUTES.TUBE_AGING.children.SELECT_REPORT.children.TEST2.URL,
            minAuthority: Authority.User,
          },
        ],
      },
    ],
  },
] as const;

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

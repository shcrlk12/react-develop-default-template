import { Authority } from "./authority";
import { ROUTES } from "./routes";
import { GlobalMenuItem } from "./types";

export const MENU_ITEMS: GlobalMenuItem[] = [
  {
    title: "Home",
    link: ROUTES.HOME.URL,
    minAuthority: Authority.User,
    localMenu: [
      {
        title: "Home Test1",
        link: ROUTES.HOME.children?.HOME_TEST1.URL as string,
        minAuthority: Authority.User,
        localSubMenu: [
          {
            title: "Test4",
            link: ROUTES.HOME.children?.HOME_TEST1.children?.TEST4
              .URL as string,
            minAuthority: Authority.User,
          },
          {
            title: "Test5",
            link: ROUTES.HOME.children?.HOME_TEST1.children?.TEST5
              .URL as string,
            minAuthority: Authority.User,
          },
        ],
      },
      {
        title: "Home Test2",
        link: ROUTES.HOME.children?.HOME_TEST2.URL as string,
        minAuthority: Authority.User,
        localSubMenu: [
          {
            title: "Test6",
            link: ROUTES.HOME.children?.HOME_TEST2.children?.TEST6
              .URL as string,
            minAuthority: Authority.User,
          },
          {
            title: "Test7",
            link: ROUTES.HOME.children?.HOME_TEST2.children?.TEST7
              .URL as string,
            minAuthority: Authority.User,
          },
        ],
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
        link: ROUTES.TUBE_AGING.children?.SIMULATION_DATA.URL as string,
        minAuthority: Authority.User,
        localSubMenu: [
          {
            title: "Turn On",
            link: ROUTES.TUBE_AGING.children?.SIMULATION_DATA.children?.TURN_ON
              .URL as string,
            minAuthority: Authority.User,
          },
          {
            title: "Pre-IV",
            link: ROUTES.TUBE_AGING.children?.SIMULATION_DATA.children?.PRE_IV
              .URL as string,
            minAuthority: Authority.User,
          },
        ],
      },
      {
        title: "Select Report",
        link: ROUTES.TUBE_AGING.children?.SELECT_REPORT.URL as string,
        minAuthority: Authority.User,
        localSubMenu: [
          {
            title: "Test1",
            link: ROUTES.TUBE_AGING.children?.SELECT_REPORT.children?.TEST1
              .URL as string,
            minAuthority: Authority.User,
          },
          {
            title: "Test2",
            link: ROUTES.TUBE_AGING.children?.SELECT_REPORT.children?.TEST2
              .URL as string,
            minAuthority: Authority.User,
          },
        ],
      },
    ],
  },
] as const;

type RouteNode<T extends string = string> = {
  URL: T;
  children?: {
    [key: string]: RouteNode;
  };
};

const createRoutes = <T extends Record<string, RouteNode>>(
  routes: T,
  basePath: string = ""
): T => {
  const newRoutes = {} as T;

  for (const key in routes) {
    const fullPath = basePath + routes[key].URL;
    newRoutes[key] = {
      ...routes[key],
      URL: fullPath,
    };

    if (routes[key].children) {
      newRoutes[key].children = createRoutes(routes[key].children, fullPath);
    }
  }

  return newRoutes;
};

const ORIGINAL_ROUTES = {
  HOME: {
    URL: "/",
  },
  LOGIN: {
    URL: "/login",
  },
  LOGOUT: {
    URL: "/logout",
  },
  TUBE_AGING: {
    URL: "/tube-aging",
    children: {
      SIMULATION_DATA: {
        URL: "/simulation-data",
        children: {
          TURN_ON: { URL: "/turn-on" },
          PRE_IV: { URL: "/pre-iv" },
        },
      },
      SELECT_REPORT: {
        URL: "/select-data",
        children: {
          TEST1: { URL: "/test1" },
          TEST2: { URL: "/test2" },
        },
      },
    },
  },
  USER: {
    URL: "/user",
    children: {
      USER_INFORMATION: {
        URL: "/user-information",
      },
      USER_MANAGEMENT: {
        URL: "/user-management",
      },
    },
  },
} as const;

export const ROUTES = createRoutes(ORIGINAL_ROUTES);

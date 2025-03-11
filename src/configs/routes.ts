type RoutesType = {
  URL: string;
  children?: Record<string, RoutesType>;
};

export const ORIGINAL_ROUTES: Record<string, RoutesType> = {
  HOME: {
    URL: "/home",
    children: {
      HOME_TEST1: {
        URL: "/home-test1",
        children: {
          TEST4: { URL: "/test4" },
          TEST5: { URL: "/test5" },
        },
      },
      HOME_TEST2: {
        URL: "/home-test2",
        children: {
          TEST6: { URL: "/test6" },
          TEST7: { URL: "/test7" },
        },
      },
    },
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
} as const;

const createRoutes = (
  originalRoutes: Record<string, RoutesType>,
  convertedRoutes: Record<string, RoutesType> = {},
  basePath: string = ""
): Record<string, RoutesType> => {
  const newRoutes: Record<string, RoutesType> = convertedRoutes; // routes가 없으면 초기화

  for (const key in originalRoutes) {
    // URL을 누적하여 생성
    const fullPath = basePath + originalRoutes[key].URL;
    newRoutes[key] = { URL: fullPath };

    // children이 있으면 재귀 호출
    if (originalRoutes[key].children) {
      newRoutes[key].children = {}; // children 속성 초기화
      createRoutes(
        originalRoutes[key].children,
        newRoutes[key].children,
        fullPath
      );
    }
  }

  return newRoutes;
};

export const ROUTES = createRoutes(ORIGINAL_ROUTES);

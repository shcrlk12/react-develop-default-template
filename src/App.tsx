import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import MainPage from "@pages/MainPage";
import { Reset } from "styled-reset";
import AppContainer from "@components/AppContainer";
import { ROUTES } from "@src/configs/routes";
import { Authority } from "./configs/authority";
import AuthCheck from "./components/common/AuthCheck";

function App() {
  const protectedRoutes = [
    {
      path: ROUTES.HOME.URL,
      component: <MainPage />,
      requiredRole: Authority.User,
    },
    {
      path: ROUTES.LOGIN.URL,
      component: <LoginPage />,
      requiredRole: Authority.Anonymous,
    },
    {
      path: ROUTES.TUBE_AGING.children.SIMULATION_DATA.URL,
      component: <MainPage />,
      requiredRole: Authority.Manager,
    },
    {
      path: ROUTES.TUBE_AGING.children.SIMULATION_DATA.children.TURN_ON.URL,
      component: <MainPage />,
      requiredRole: Authority.Manager,
    },
    {
      path: ROUTES.TUBE_AGING.children.SIMULATION_DATA.children.PRE_IV.URL,
      component: <MainPage />,
      requiredRole: Authority.Manager,
    },
    {
      path: ROUTES.TUBE_AGING.children.SELECT_REPORT.URL,
      component: <MainPage />,
      requiredRole: Authority.Manager,
    },
    {
      path: ROUTES.TUBE_AGING.children.SELECT_REPORT.children.TEST1.URL,
      component: <MainPage />,
      requiredRole: Authority.Manager,
    },
    {
      path: ROUTES.TUBE_AGING.children.SELECT_REPORT.children.TEST2.URL,
      component: <MainPage />,
      requiredRole: Authority.Manager,
    },
    {
      path: ROUTES.USER.URL,
      component: <MainPage />,
      requiredRole: Authority.Admin,
    },
    {
      path: ROUTES.USER.children.USER_INFORMATION.URL,
      component: <MainPage />,
      requiredRole: Authority.Admin,
    },
    {
      path: ROUTES.USER.children.USER_MANAGEMENT.URL,
      component: <MainPage />,
      requiredRole: Authority.Admin,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Reset />
        <AppContainer>
          <Routes>
            {protectedRoutes.map((route) => (
              <Route
                path={route.path}
                element={
                  <AuthCheck
                    component={route.component}
                    requiredRole={route.requiredRole}
                  />
                }
              />
            ))}

            {/* 404 Not Found, 리디렉션 처리 */}
            <Route
              path="*"
              element={<Navigate to={ROUTES.LOGIN.URL} replace />}
            />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import MainPage from "@pages/MainPage";
import { Reset } from "styled-reset";
import AppContainer from "@components/AppContainer";
import { ROUTES } from "@src/configs/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Reset />
        <AppContainer>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
            <Route path={ROUTES.TUBE_AGING.URL} element={<MainPage />}></Route>
            <Route
              path={ROUTES.TUBE_AGING.children?.SIMULATION_DATA.URL}
              element={<MainPage />}
            ></Route>
            <Route
              path={ROUTES.TUBE_AGING.children?.SELECT_REPORT.URL}
              element={<MainPage />}
            ></Route>
            <Route
              path={
                ROUTES.TUBE_AGING.children?.SIMULATION_DATA.children?.TURN_ON
                  .URL
              }
              element={<MainPage />}
            ></Route>
            <Route
              path={
                ROUTES.TUBE_AGING.children?.SIMULATION_DATA.children?.PRE_IV.URL
              }
              element={<MainPage />}
            ></Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;

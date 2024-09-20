import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/global";
import { Header } from "@components/Header/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header/> */}
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

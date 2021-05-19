import React, { FC } from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";
import Router from "./router";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;

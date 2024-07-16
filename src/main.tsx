import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/abril-fatface";
import "@fontsource/abril-fatface/400.css";
import "@fontsource/lato";
import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);

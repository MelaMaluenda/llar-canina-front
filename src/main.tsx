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
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import home_cat from "./translations/catala/home.json";
import home_esp from "./translations/español/home.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "cat",
  resources: {
    cat: {
      home: home_cat,
    },
    esp: {
      home: home_esp,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);

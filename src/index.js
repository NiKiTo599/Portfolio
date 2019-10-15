import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from "./components/App";
import common_en from './translates/en/common.json'
import common_ru from './translates/ru/common.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
        common: common_en         
    },
    ru: {
        common: common_ru
    },
},
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import common_ar from "./translations/ar/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    fr: {
      common: common_fr
    },
    ar: {
      common: common_ar
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,

  document.getElementById("root")
);
registerServiceWorker();

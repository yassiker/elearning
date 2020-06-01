import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import common_fr from './translations/fr/common.json';
import common_en from './translations/en/common.json';
import common_ar from './translations/ar/common.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    fr: {
      common: common_fr,
    },
    ar: {
      common: common_ar,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar={true}
        closeOnToastrClick
      />
    </PersistGate>
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();

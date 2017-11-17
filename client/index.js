import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import {
  BrowserRouter,
} from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}

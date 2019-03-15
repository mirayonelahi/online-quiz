import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import { Store } from './models/Store';
import 'tachyons';

const store = Store.create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

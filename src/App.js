import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import GlobalStyle from './style/global';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
        <GlobalStyle />
      </div>
    </Provider>
  );
}

export default App;

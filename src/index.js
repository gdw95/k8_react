import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//mport reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //<React.StrictMode> ->콘솔에서 두번씩 찍히는 현상 막음
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

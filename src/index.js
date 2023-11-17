import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App';
import reportWebVitals from './reportWebVitals';
import Banner1 from './Banner';
import About1 from './About';
import Sample from './Sample';
import Table from './Table'
import Show from './Show';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
    <Banner1 />
    <About1 />
    <Sample name="dinesh"age="20" />
    <Sample name="ponselvi"age="20" />
    <Sample name="pradeep"age="20" />
    <Table />
    <Show />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

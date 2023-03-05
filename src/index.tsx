import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GameContextProvider from './context/gameLevelContext';


function flocOff() {
  const cohorts = "interestCohort";
const documentProto:any = Document.prototype;
const flocSupported = cohorts in documentProto;

if (!flocSupported) {
  return;
}

const descriptor = Object.getOwnPropertyDescriptor(documentProto, cohorts);
const writable = descriptor && descriptor.writable;
if (writable) {
  const proxy = new Proxy(documentProto[cohorts], { apply: () => Promise.reject() });
  const config = {
    writable: false,
    value: proxy,
    configurable: false,
    enumerable: false,
  };
  Object.defineProperty(documentProto, cohorts, config);
}
}

flocOff();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
    <GameContextProvider>
      <RouterProvider router={router} />
    </GameContextProvider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

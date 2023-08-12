import React from 'react';
import ReactDOM from 'react-dom';
import {Lista3, Item} from './components/Lista3';
//import Hello from './components/Hello.js';
import Estado4 from './components/Estado4.js';
import reportWebVitals from './reportWebVitals';

    /*
    <Lista3>
        Teste1
        Teste2
        <Item key={999} id={999} completo={true}>teste</Item>
        <Item key={1000} id={1000} completo={false}>teste2</Item>
    </Lista3>
    */


    //<Hello text="Hello!">Ola</Hello>

ReactDOM.render(
  <React.StrictMode>
      <Estado4/>
      <Lista3/>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from "./components/Clock/Clock";

import "./styles/Global.scss"


ReactDOM.render(
  <React.StrictMode>
    <Clock />
    </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from '/components/Hello';

let hi = 'hi';
console.log(hi);

const mountNode = document.getElementById('app');
ReactDOM.render(<Hello name="Jason" />, mountNode);

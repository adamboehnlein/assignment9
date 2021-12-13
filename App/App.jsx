import React from 'react';
import { Article2 } from '../App/Article2';
import { Article1 } from '../App/Article1';

import {
  Article1,
  Article2,
  Article3
} from './';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3 className="p-3 text-center">Assignment 9</h3>
        <ul>
            <li><Article1 /></li>
            <li><Article2 /></li>
            <li><Article3 /></li>
        </ul>
      </div>
    );
  }
}

export { App };

import React, { Component } from 'react';

import GlobalSelectors from './GlobalSelectors';
import Snippet         from '../shared/Snippet/Snippet';
import readFile        from '../shared/readFile';

const js  = readFile(__dirname, 'GlobalSelectors.js');
const css = readFile(__dirname, 'GlobalSelectors.css');

export default class GlobalSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'GlobalSelectors.js', source: js },
      { name: 'GlobalSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <GlobalSelectors />
      </Snippet>
    );
  }

};

import React, { Component } from 'react';

import ScopedSelectors from './ScopedSelectors';
import Snippet         from '../shared/Snippet/Snippet';
import readFile        from '../shared/readFile';

const js  = readFile(__dirname, 'ScopedSelectors.js');
const css = readFile(__dirname, 'ScopedSelectors.css');

export default class ScopedSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedSelectors.js', source: js },
      { name: 'ScopedSelectors.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <ScopedSelectors />
      </Snippet>
    );
  }

};

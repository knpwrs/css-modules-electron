import React, { Component } from 'react';

import CompositionOverrides from './CompositionOverrides';
import Snippet              from '../shared/Snippet/Snippet';
import readFile             from '../shared/readFile';

const js            = readFile(__dirname, 'CompositionOverrides.js');
const css           = readFile(__dirname, 'CompositionOverrides.css');
const layoutCss     = readFile(__dirname, '../shared/styles/layout.css');
const typographyCss = readFile(__dirname, '../shared/styles/typography.css');

export default class CompositionOverridesDemo extends Component {

  render() {
    const files = [
      { name: 'CompositionOverrides.js', source: js },
      { name: 'CompositionOverrides.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <CompositionOverrides />
      </Snippet>
    );
  }

};

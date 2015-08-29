import React, { Component } from 'react';

import ClassComposition from './ClassComposition';
import Snippet          from '../shared/Snippet/Snippet';
import readFile         from '../shared/readFile';

const js            = readFile(__dirname, 'StyleVariantA/StyleVariantA.js');
const css           = readFile(__dirname, 'StyleVariantA/StyleVariantA.css');
const layoutCss     = readFile(__dirname, '../shared/styles/layout.css');
const typographyCss = readFile(__dirname, '../shared/styles/typography.css');

export default class ClassCompositionDemo extends Component {

  render() {
    const files = [
      { name: 'StyleVariantA.js', source: js },
      { name: 'StyleVariantA.css', source: css },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <ClassComposition />
      </Snippet>
    );
  }

};

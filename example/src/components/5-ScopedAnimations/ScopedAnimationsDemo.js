import React, { Component } from 'react';

import ScopedAnimations from './ScopedAnimations';
import Snippet          from '../shared/Snippet/Snippet';
import readFile         from '../shared/readFile';

const js            = readFile(__dirname, 'ScopedAnimations.js');
const css           = readFile(__dirname, 'ScopedAnimations.css');
const animationsCss = readFile(__dirname, '../shared/styles/animations.css');

export default class ScopedAnimationsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedAnimations.js', source: js },
      { name: 'ScopedAnimations.css', source: css },
      { name: 'shared/styles/animations.css', source: animationsCss }
    ];

    return (
      <Snippet files={files}>
        <ScopedAnimations />
      </Snippet>
    );
  }

};

import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { loadScrollyteller } from '@abcnews/scrollyteller';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

whenOdysseyLoaded.then(() => {
  const { mountNode, panels } = loadScrollyteller('cave', 'u-full');

  // Pluck illustration images from PL figures
  panels.forEach(panel => {
    panel.nodes.forEach(node => {
      if (node.tagName === 'FIGURE') {
        const imgEl = node.querySelector('img');
        const pEl = document.createElement('p');

        imgEl.removeAttribute('width');
        imgEl.removeAttribute('height');
        pEl.appendChild(imgEl);
        panel.nodes.splice(panel.nodes.indexOf(node), 1, pEl);
      }
    });
  });

  render(<App panels={panels} />, mountNode);
});

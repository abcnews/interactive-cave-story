const React = require('react');
const { render } = require('react-dom');

const PROJECT_NAME = 'interactive-cave-story';
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

const scrollyteller = require('@abcnews/scrollyteller').loadOdysseyScrollyteller('cave', 'u-full', 'mark');

// Fix image sizes
scrollyteller.panels.forEach(panel => {
  panel.nodes.forEach(node => {
    if (node.tagName === 'IMG') {
      node.removeAttribute('width');
      node.removeAttribute('height');
    } else {
      [].slice.call(node.querySelectorAll('img')).forEach(img => {
        img.removeAttribute('width');
        img.removeAttribute('height');
      });
    }
  });
});

function init() {
  const App = require('./components/App');
  render(<App scrollyteller={scrollyteller} />, scrollyteller.mountNode);
}

init();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    try {
      init();
    } catch (err) {
      const ErrorBox = require('./components/ErrorBox');
      render(<ErrorBox error={err} />, root);
    }
  });
}

if (process.env.NODE_ENV === 'development') {
  console.debug(`[${PROJECT_NAME}] public path: ${__webpack_public_path__}`);
}

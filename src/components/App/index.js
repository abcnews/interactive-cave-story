import Scrollyteller from '@abcnews/scrollyteller';
import React from 'react';
import Cave from '../Cave';
import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onMarker = this.onMarker.bind(this);

    this.state = {
      config: {}
    };
  }

  onMarker(marker) {
    let config = {};

    if (typeof marker.shift !== 'undefined') {
      config.shift = marker.shift;
    }

    if (typeof marker.x !== 'undefined') {
      config.x = marker.x;
    }

    if (typeof marker.y !== 'undefined') {
      config.y = marker.y;
    }

    this.setState(() => ({ config }));
  }

  render() {
    const { panels } = this.props;

    return (
      <Scrollyteller
        panels={panels}
        // className={`Block is-piecemeal has-right ${styles.scrollyteller}`}
        className={styles.scrollyteller}
        // panelClassName={`Block-content u-richtext-invert is-right ${styles.panel}`}
        panelClassName={styles.panel}
        onMarker={this.onMarker}
      >
        <Cave config={this.state.config} />
      </Scrollyteller>
    );
  }
}

export default App;

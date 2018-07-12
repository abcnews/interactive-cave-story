const React = require('react');
const Scrollyteller = require('@abcnews/scrollyteller');
const Cave = require('../Cave');

const styles = require('./styles.scss');

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
    const { scrollyteller } = this.props;

    return (
      <div className={styles.root}>
        <Scrollyteller
          panels={scrollyteller.panels}
          className={`Block is-richtext is-piecemeal ${styles.scrollyteller}`}
          panelClassName={`Block-content u-layout u-richtext-invert ${styles.panel}`}
          onMarker={this.onMarker}>
          <Cave config={this.state.config} />
        </Scrollyteller>
      </div>
    );
  }
}

module.exports = App;

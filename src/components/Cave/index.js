const React = require('react');
const styles = require('./styles.scss');

const CAVE_IMG = require('./cave.svg');
const WIDTH = 1800;
const HEIGHT = 3588;

const LOCATION_IMG = require('./location.svg');

class Cave extends React.Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.forceUpdate();
  }

  render() {
    const { config } = this.props;
    const { shift, x, y } = config;

    const ratio = window.innerWidth / WIDTH;
    const width = WIDTH * ratio;
    const height = HEIGHT * ratio;

    const isLandscape = window.innerWidth > window.innerHeight;
    let shiftOffset = isLandscape ? 100 : 100;
    const scale = isLandscape ? 0.5 : 1;

    // Ensure the highlighted section is actually in view
    if (y - shift > window.innerHeight) {
      shiftOffset -= (y - shift) / 2;
    }

    const moveLeft = window.innerWidth > 400 ? window.innerWidth / 3 : 0;
    const transform = `scale(${scale}) translateX(-${moveLeft}px) translateY(${shiftOffset - shift * scale * ratio}px)`;

    return (
      <div className={styles.wrapper}>
        <div className={styles.transformer} style={{ width, height, transform, transformOrigin: `50% 0px` }}>
          <img src={CAVE_IMG} style={{ width, height, maxWidth: '1000%' }} />
          {x > 0 &&
            y > 0 && (
              <img
                src={LOCATION_IMG}
                className={styles.location}
                style={{ top: y * ratio + 'px', left: x * ratio + 'px', maxWidth: `${200 * ratio}px` }}
              />
            )}
        </div>
      </div>
    );
  }
}

module.exports = Cave;

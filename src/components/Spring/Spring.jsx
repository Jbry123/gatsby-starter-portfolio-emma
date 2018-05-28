import { config } from 'react-spring'
/*
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
*/
import { Spring } from 'react-spring'

class Spring extends React.PureComponent {
  static propTypes = {
    // Will skip rendering the component if true and write to the dom directly
    native: PropTypes.bool,
    // Base styles, optional
    from: PropTypes.object,
    // Animates to ...
    to: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // Callback when the animation comes to a still-stand
    onRest: PropTypes.func,
    // Frame by frame callback, first argument passed is the animated value
    onFrame: PropTypes.func,
    // Takes a function that receives interpolated styles
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.func),
    ]),
    // Same as children, but takes precedence if present
    render: PropTypes.func,
    // Prevents animation if true, you can also pass individual keys
    immediate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    // Won't start animations, so they can be controlled from outside
    hold: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    // Spring config ({ tension, friction } or a function receiving a name)
    config: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    // When true it literally resets: from -> to
    reset: PropTypes.bool,
  }
  static defaultProps = {
    from: {},
    to: {},
    config: config.default,
    native: false,
    immediate: false,
    hold: false,
  }
}
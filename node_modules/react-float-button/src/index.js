/* eslint-disable */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Index component
class FloatButton extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showUpdate = this.showUpdate.bind(this);
  }

  showUpdate() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const divStyle = Object.assign({}, this.props.style, { position: 'relative' });
    return (
      <div style={divStyle}>
        {
          Object.prototype.toString.call(this.props.children) === '[object Array]' &&
          this.props.children.map((item, i) => {
            if (i === 0) {
              return (
                <div
                  key={`float-btn-${i}`}
                  tabIndex={0}
                  role="button"
                  style={{ zIndex: 2, position: 'relative' }}
                  onClick={this.showUpdate}
                >
                  {item}
                </div>
              );
            }

            return (
              <div
                tabIndex={-1}
                role="button"
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  bottom: this.state.show ? this.props.margin * i : 0,
                  opacity: this.state.show ? 1 : 0,
                  visibility: this.state.show ? 'visible' : 'hidden',

                  MsTransition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  WebkitTransition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

                  MsTransitionDelay: `${i * this.props.delay}s`,
                  WebkitTransitionDelay: `${i * this.props.delay}s`,
                  transitionDelay: `${i * this.props.delay}s`,

                  MsTransform: `scale(${this.state.show ? 1 : 0}, ${this.state.show ? 1 : 0})`,
                  WebkitTransform: `scale(${this.state.show ? 1 : 0}, ${this.state.show ? 1 : 0})`,
                  transform: `scale(${this.state.show ? 1 : 0}, ${this.state.show ? 1 : 0})`,
                }}
                onClick={this.showUpdate}
              >
                {item}
              </div>
            );
          })}
      </div>
    );
  }
}

// FloatButton.propTypes = {
//   margin: PropTypes.number,
//   children: PropTypes.array.isRequired, // eslint-disable-line
//   style: PropTypes.obj,
// };

FloatButton.defaultProps = {
  margin: 50,
  children: [],
  style: {},
  delay: 0.03,
};

export default FloatButton;

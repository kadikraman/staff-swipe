import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import classnames from 'classnames';

import Rating from '../Rating';
import './style.css';

const THRESHOLD = 100;

class Candidate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
    onAccept: PropTypes.func.isRequired,
    onReject: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      accept: false,
      reject: false,
    };
  }

  onDrag = (_, position) => {
    const x = position.x;

    this.setState({
      accept: x > THRESHOLD,
      reject: x < -THRESHOLD,
    });
  };

  onStop = () => {
    const { accept, reject } = this.state;
    const { onAccept, onReject } = this.props;

    if (accept) onAccept();
    if (reject) onReject();

    if (!accept && !reject) {
      this.setState({
        accept: false,
        reject: false,
      });
    }
  };

  render() {
    const { name, rating, imageSrc } = this.props;
    const { accept, reject } = this.state;
    return (
      <Draggable
        axis="x"
        onDrag={this.onDrag}
        onStop={this.onStop}
        position={{ x: 0, y: 0 }}
      >
        <div
          className={classnames('Candidate', {
            '--accept': accept,
            '--reject': reject,
          })}
        >
          <img
            className="Candidate__image"
            src={imageSrc}
            alt={name}
            draggable={false}
          />
          <h3>{name}</h3>
          <Rating rating={rating} />
        </div>
      </Draggable>
    );
  }
}

export default Candidate;

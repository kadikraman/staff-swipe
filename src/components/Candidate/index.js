import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import classnames from 'classnames';

import Rating from '../Rating';
import './style.css';

const THRESHOLD = 100;
export const CANDIDATE_ID = 'candidateId';

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
      xPos: 0,
    };
  }

  onDrag = (_, position) => {
    const x = position.x;

    this.setState({
      accept: x > THRESHOLD,
      reject: x < -THRESHOLD,
      xPos: x,
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
        xPos: 0,
      });
    }
  };

  render() {
    const { name, rating, imageSrc } = this.props;
    const { accept, reject, xPos } = this.state;

    return (
      <Draggable
        axis="x"
        onDrag={this.onDrag}
        onStop={this.onStop}
        position={{ x: xPos, y: 0 }}
      >
        <div>
          <div
            id={CANDIDATE_ID}
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
        </div>
      </Draggable>
    );
  }
}

export default Candidate;

import PropTypes from 'prop-types';
import './styles.scss';
import React from 'react';

function Task({ title, description }) {
  return (
    <li className="task">
      <span className="task__title">{title}</span>
      {description?.trim() !== ''
        && (<span className="task__description"> - {description}</span>)}
    </li>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Task.defaultProps = {
  description: null,
};

export default React.memo(Task);

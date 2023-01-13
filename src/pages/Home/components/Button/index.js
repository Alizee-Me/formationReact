import PropTypes from 'prop-types';
import './styles.scss';

function Button({ children, ...restProps }) {
  return (
    <button type="button" className="btn btn--primary" {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
};

export default Button;

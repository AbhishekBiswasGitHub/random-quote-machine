import PropTypes from "prop-types";
import "./Quote.css";

const Quote = ({ text, author }) => {
  return (
    <div id="quote">
      <div id="text">
        <q>{text}</q>
      </div>
      <div id="author">
        <span>{author}</span>
      </div>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;

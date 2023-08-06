import PropTypes from "prop-types";

import "./Controls.css";

const Controls = ({ text, author, getQuote }) => {
  const encoded = encodeURIComponent(
    `"${text}" - ${author}`
  );

  return (
    <div id="controls">
      <div
        id="new-quote"
        onClick={() => getQuote()}
      >
        NEW QUOTE
      </div>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encoded}`}
        target="_blank"
        title="tweet this quote"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
    </div>
  );
};

Controls.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  getQuote: PropTypes.func.isRequired,
};

export default Controls;

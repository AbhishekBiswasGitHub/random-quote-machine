import { useEffect, useState } from "react";
import axios from "axios";

import Quote from "./Quote";

import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then(({ data }) => {
        setText(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (!text || !author) getQuote();
  });

  return (
    <div id="quote-box">
      <Quote
        text={text}
        author={author}
      />
    </div>
  );
};

export default App;

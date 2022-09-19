import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function error() {
    alert(
      "We do not have a definition for this word. Please check your spelling or search another word."
    );
  }

  function search(event) {
    event.preventDefault();
    event.target.reset();

    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse).catch(error);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word would you like to look up?</h2>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}

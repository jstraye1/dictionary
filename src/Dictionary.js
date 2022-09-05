import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <h2>What word would you like to look up?</h2>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

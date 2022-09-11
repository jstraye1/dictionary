import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      {" "}
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition) {
          return (
            <ul key={index}>
              <li>
                {index + 1}. {definition.definition}
                <br />
                <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </li>
            </ul>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

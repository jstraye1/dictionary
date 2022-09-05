import React from "react";

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
                {definition.definition}
                <br />
                <em>{definition.example}</em>
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

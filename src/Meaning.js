import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h5>{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function (definition, index) {
          if (definition) {
            return (
              <span key={index}>
                <p className="definition">
                  {index + 1}. {definition.definition}
                </p>
                <p>
                  <em>{definition.example}</em>
                </p>
                <Synonyms synonyms={definition.synonyms} />
              </span>
            );
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
}

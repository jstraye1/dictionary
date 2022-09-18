import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <h4>
          <span className="phonetic-text">{props.phonetic.text}</span>
        </h4>

        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          className="phonetic-audio"
        />
      </div>
    );
  } else {
    return <h4>{props.phonetic.text}</h4>;
  }
}

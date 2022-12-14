import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio && props.phonetic.text) {
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
  } else if (props.phonetic.audio) {
    return null;
  } else {
    return (
      <div className="Phonetics">
        <div className="row mt-2">
          <h4>
            <span className="phonetic-text">{props.phonetic.text}</span>
          </h4>
        </div>
      </div>
    );
  }
}

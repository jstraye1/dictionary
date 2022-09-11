import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <h4> {props.phonetic.text}</h4>
        Listen: <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    );
  } else {
    return <h4>{props.phonetic.text}</h4>;
  }
}

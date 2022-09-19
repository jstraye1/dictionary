import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm-4 col-6 mb-4 mt-2" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid rounded p-0"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

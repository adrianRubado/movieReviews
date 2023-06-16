import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const Trailer = (props) => {
  let params = useParams();
  let key = 1;

  return (
    <div
      style={{
        marginTop: "80px",
        height: "47vh",
        width: "90vw",
        marginLeft: "20px",
      }}
    >
      {key != null ? (
        <ReactPlayer
          controls="true"
          playing={false}
          url={props.trailer}
          width="90%"
          height="90%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;

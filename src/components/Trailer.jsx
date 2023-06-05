import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const Trailer = () => {
  let params = useParams();
  let key = 1;

  return (
    <div
      style={{
        marginTop: "50px",
        height: "50vh",
        width: "120vw",
        /* paddingTop: "100px",
        paddingBottom: "100px",
        paddingRight: "10px",
        paddingLeft: "100px", */
      }}
    >
      {key != null ? (
        <ReactPlayer
          controls="true"
          playing={false}
          url={`https://www.youtube.com/watch?v=shW9i6k8cB0&ab_channel=SonyPicturesEntertainment`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;

import React, { useRef } from "react";
import "./VideoPlayer.css";
import demo from "../../assets/demo.mp4";

const VideoPlayer = ({ play, setPlay }) => {
  const player = useRef(null); //to dismiss the video whe we click at the screen
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlay(false);
    }
  };
  return (
    <div
      className={`video-player ${play ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={demo} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;

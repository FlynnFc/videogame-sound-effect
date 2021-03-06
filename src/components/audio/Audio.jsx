import React, { useEffect, useRef, useState } from "react";

export const Audio = (props) => {
  const [source, setSource] = useState();
  const audioRef = useRef();

  useEffect(() => {
    setSource(props.currentSource);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [props.currentSource]);
  return (
    <div>
      <audio ref={audioRef} controls>
        <source type="audio/mpeg" src={source} />
        <source type="audio/ogg" src="" />
      </audio>
    </div>
  );
};

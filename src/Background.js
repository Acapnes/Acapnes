import React from "react";

export const Background = () => {
  return (
    <video
      className="w-[100%] h-[100%] object-cover"
      src='/assets/bgloop.mp4'
      autoPlay
      loop
      muted
    ></video>
  );
};

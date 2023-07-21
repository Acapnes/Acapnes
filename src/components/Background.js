import React from "react";

export const Background = () => {
  return (
    <video
      className="min-h-screen w-full h-full object-cover absolute top-0 left-0"
      src="./assets/bgloop.mp4"
      autoPlay
      loop
      muted
      style={{
        position: "fixed",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zIndex: "-1",
      }}
    ></video>
  );
};

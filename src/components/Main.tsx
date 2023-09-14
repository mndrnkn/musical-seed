import React from "react";
import StartingPoint from "./StartingPoint";
import Configuration from "./Configuration";


const Main: React.FC = () => {
  return (
    <>
      <h1>Music Prompt</h1>
      <Configuration />
      <StartingPoint />
    </>
  );
};

export default Main;

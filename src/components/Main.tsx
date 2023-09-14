import React from "react";
import StartingPoint from "./StartingPoint";
import Configuration from "./Configuration";
import AllInstruments from "./AllInstruments";


const Main: React.FC = () => {
  return (
    <>
      <h1>Music Prompt</h1>
      <Configuration />
      <StartingPoint />
      <AllInstruments />
    </>
  );
};

export default Main;

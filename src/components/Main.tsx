import React from "react";
import StartingPoint from "./StartingPoint";
import Configuration from "./Configuration";


const Main: React.FC = () => {
  return (
    <div className="main">
      <h1>Music Prompt</h1>
      <Configuration />
      <StartingPoint />
      <style jsx>
        {`
          .main {
            display: flex;
            flex-direction: column;
            gap: 32px;
            align-items: center;
            padding: 32px;
            width: 400px;
            max-width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Main;

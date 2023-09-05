import React from "react";
import { MusicalParameters } from "@/data/types";

type Props = {
  parameters: MusicalParameters | null;
};
const Parameters: React.FC<Props> = ({ parameters }) => {
  if (!parameters) {
    return null;
  }

  return (
    <div className="parameters">
      <h3>Musical Parameters:</h3>
    <div className="parameterWrapper">
      <div className="harmonic">
      <h4>Harmonic:</h4>
      {typeof parameters.harmonic !== "string" && (
        <>
          <div><strong>Key Signature:</strong> {parameters.harmonic.keySignature}</div>
          <div><strong>Tonal Framework:</strong> {parameters.harmonic.tonalFramework.name}</div>
        </>
      )}
      {typeof parameters.harmonic === "string" && (
         <div><strong>Guitar Tuning:</strong> <div>{parameters.harmonic}</div></div>
      )}
      </div>
      <div className="rhythmic">
    <h4>Rhythmic:</h4>
      {typeof parameters.rhythm !== "string" && (
        <>
          <div><strong>Tempo:</strong> {parameters.rhythm.tempo}bpm</div>
          <div><strong>Time Signature:</strong> {parameters.rhythm.timeSignature.beatCount}/{parameters.rhythm.timeSignature.beatUnit}</div>
        </>
      )}
      {typeof parameters.rhythm === "string" && (
        <><strong>Rhythm track:</strong> {parameters.rhythm}</>
      )}
      </div>
    </div>
    <style jsx>{`

    h3 {
      white-space: nowrap;
    }
     

      


    `}
    </style>
    </div>
  );
};

export default Parameters;

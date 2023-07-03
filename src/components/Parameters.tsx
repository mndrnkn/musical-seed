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
      <h3>Musical Paramenters</h3>
    <ul>
      <li><h4>Harmonic:</h4>
        <ul>
      {typeof parameters.harmonic !== "string" && (
        <>
          <li><strong>Key Signature:</strong> {parameters.harmonic.keySignature}</li>
          <li><strong>Tonal Framework:</strong> {parameters.harmonic.tonalFramework.name}</li>
        </>
      )}

{typeof parameters.harmonic === "string" && (
         <li><strong>Guitar Tuning:</strong> {parameters.harmonic}</li>
      )}
      </ul>
      </li>
  <li>
    <h4>Rhythmic:</h4>
    <ul>
      {typeof parameters.rhythm !== "string" && (
        <>
          <li><strong>Tempo:</strong> {parameters.rhythm.tempo}bpm</li>
          <li><strong>Time Signature:</strong> {parameters.rhythm.timeSignature.beatCount}/{parameters.rhythm.timeSignature.beatUnit}</li>
        </>
      )}
      {typeof parameters.rhythm === "string" && (
        <li><strong>Rhythm track:</strong> {parameters.rhythm}</li>
      )}
      </ul>
      </li>
    </ul>
    <style jsx>{`
   
    `}
    </style>
    </div>
  );
};

export default Parameters;

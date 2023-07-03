
import React, {useCallback,useContext } from "react";
import GlobalContext, { State } from "@/app/GlobalContext";
import { rhythmTracks } from "@/data/rhythmTrack";
import { guitarAlternateTunings } from "@/data/guitars";
import { instruments } from "@/data/instruments";
import Parameters from "./Parameters";
import Instrumentation from "./Instrumentation";

import {
    Instrument,
    InstrumentCategory,
    MusicalParameters,
    notes,
    tonalSet,
    TonalFramework,
    timeSignatures,
    TimeSignature,
    RhythmType,
    HarmonicFramework,
  } from "@/data/types";

const StartingPoint: React.FC = () => {
    const { state, setState } = useContext(GlobalContext);
    const {
      ease,
      numberInstruments,
      heavyRotation,
      acceptableVolume,
      conventionality,
      isRhythmTrack,
      showConfig,
      hasAlternateTuning,
      musicalParameters,
      instrumentation
    } = state;
    const setValue = useCallback((key: keyof State, value: any) => {
        setState((prevState) => ({
          ...prevState,
          [key]: value,
        }));
      }, [setState]);

    const isInRotationRange = useCallback(
        (instrument: Instrument) => {
          switch (heavyRotation) {
            case 1:
              return instrument.priority === 1;
            case 1.5:
              return instrument.priority <= 2;
            case 2:
              return true;
            case 2.5:
              return instrument.priority >= 2;
            case 3:
              return instrument.priority === 3;
            default:
              return false;
          }
        },
        [heavyRotation]
      );
    
      const filterInstrumentCategory: (
        category: InstrumentCategory
      ) => Instrument | null = useCallback(
        (category: InstrumentCategory) => {
          const fitsCriteria: Instrument[] = [];
          category.map((instrument) => {
            if (
              instrument.setUpEase <= ease &&
              instrument.volume <= acceptableVolume &&
              isInRotationRange(instrument)
            ) {
              fitsCriteria.push(instrument);
            }
          });
          return fitsCriteria.length === 0
            ? null
            : fitsCriteria[Math.floor(Math.random() * fitsCriteria.length)];
        },
        [acceptableVolume, ease, isInRotationRange]
      );
    
      const getTonalFramework: () => TonalFramework = useCallback(() => {
        const eligibleTonalFrameworks = tonalSet.filter(
          (framework) => framework.frequency <= conventionality
        );
        const randomIndex = Math.floor(
          Math.random() * eligibleTonalFrameworks.length
        );
        return eligibleTonalFrameworks[randomIndex];
      }, [conventionality]);
    
      const getTimeSignature: () => TimeSignature = useCallback(() => {
        const eligibleTimeSignatures = timeSignatures.filter(
          (ts) => ts.frequency <= conventionality
        );
        const randomIndex = Math.floor(
          Math.random() * eligibleTimeSignatures.length
        );
        return eligibleTimeSignatures[randomIndex];
      }, [conventionality]);
    
      const getRhythym: () => RhythmType = useCallback(() => {
        if (isRhythmTrack) {
          const collectionIndex = Math.floor(Math.random() * rhythmTracks.length);
          const { collection, tracks } = rhythmTracks[collectionIndex];
          const trackIndex = Math.floor(Math.random() * tracks.length);
          return `${collection}: ${tracks[trackIndex]}`;
        }
        return {
          timeSignature: getTimeSignature(),
          tempo: Math.floor(Math.random() * (140 - 70 + 1)) + 70,
        };
      }, [getTimeSignature, isRhythmTrack]);
    
      const getHarmonicFramework: () => HarmonicFramework = useCallback(() => {
        if (hasAlternateTuning) {
          const tuningIndex = Math.floor(
            Math.random() * guitarAlternateTunings.length
          );
          return `${guitarAlternateTunings[tuningIndex].name}: ${guitarAlternateTunings[tuningIndex].tuning}`;
        }
        return {
          keySignature: notes[Math.floor(Math.random() * notes.length)],
          tonalFramework: getTonalFramework(),
        };
      }, [hasAlternateTuning, getTonalFramework]);

   
    
      const getStartingPoint = useCallback(() => {
        const categoryInstruments: Instrument[] = (
          ["bass", "guitar", "keyboard", "rhythm", "other"] as const
        ).flatMap((type) => {
          const categoryInstrument: Instrument | null = filterInstrumentCategory(
            instruments[type]
          );
          return categoryInstrument ? [categoryInstrument] : [];
        });
    
        const randomInstruments: Instrument[] = [];
    
        while (
          randomInstruments.length < numberInstruments &&
          categoryInstruments.length > 0
        ) {
          const randomIndex = Math.floor(
            Math.random() * categoryInstruments.length
          );
          const randomInstrument = categoryInstruments.splice(randomIndex, 1)[0];
          if (randomInstrument.alternateTuning && ease > 1 && conventionality > 1) {
            setValue('hasAlternateTuning', Math.random() < 0.35 )
          }
          randomInstruments.push(randomInstrument);
        }
  
        setValue('instrumentation', randomInstruments)
        setValue('showInstrumentation', true)
        setValue('showConfig', false)

    
        const theParams: MusicalParameters = {
          harmonic: getHarmonicFramework(),
          rhythm: getRhythym(),
        };
        setValue('musicalParameters', theParams)
      }, [
        filterInstrumentCategory,
        numberInstruments,
        getRhythym,
        getHarmonicFramework,
        conventionality,
        ease,
        setValue,
      ]);
    
    return (<>
    <button onClick={getStartingPoint}>Get starting point</button>
    {!showConfig && (
        <div className="startingPoint">
          <Instrumentation instruments={instrumentation} />
          <Parameters parameters={musicalParameters} />
          <style jsx>{`
            .startingPoint {
              display: grid;
              grid-template-columns: 1fr 2fr;
            }

          `}
          </style>
        </div>
      )}
        
    </>)
}

export default StartingPoint
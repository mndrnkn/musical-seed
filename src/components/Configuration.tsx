import React, { useContext, useCallback, useEffect } from "react";
import GlobalContext, { State } from "@/app/GlobalContext";
import RangeSlider from "./RangeSlider";
import Checkbox from "./Checkbox";
import moment from "moment";

const Configuration: React.FC = () => {
  const { state, setState } = useContext(GlobalContext);
  const {
    ease,
    numberInstruments,
    heavyRotation,
    acceptableVolume,
    conventionality,
    isAcoustic,
    isDigital,
    isElectric,
    isRhythmTrack,
    timeDate,
    showConfig,
  } = state;

  const setValue = useCallback((key: keyof State, value: number | boolean | Date | null | []) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, [setState]);

  useEffect(() => {
    // set vars based on time and day
    const hour: number = timeDate.getHours();
    const day = timeDate.getDay();
    switch (true) {
      case hour > 20:
      case hour < 10:
        setValue('acceptableVolume', 1);

        break;
      case hour > 10:
      case hour < 18:
        setValue('acceptableVolume', 3);

        break;
      default:
        setValue('acceptableVolume', 2);

        break;
    }
    switch (true) {
      case day === 0:
      case day === 5:
      case day === 6:
        setValue('ease', 3);
        break;
      case hour > 20:
        setValue('ease', 1);
        break;
      default:
        setValue('ease', 2);
    }

    switch (true) {
      case hour > 20:
        setValue('numberInstruments', 1);
        setValue('conventionality', 1);

        break;
      case day > 0 && day < 5:
        setValue('numberInstruments', 2);
        setValue('conventionality', 2);
        break;
      default:
        setValue('numberInstruments', 3);
        setValue('conventionality', 3);
        break;
    }
  }, [
    timeDate,
    setValue
  ]);

  const handleShowConfig = useCallback(() => {
    if(!showConfig) {
        setValue('instrumentation', [])
        setValue('musicalParameters', null)
    }
    setValue('showConfig', !showConfig)
  }, [setValue, showConfig])


  return (
    <section className="configuration">
       <button onClick={handleShowConfig}>
          {showConfig ? "Hide" : " Customize"}
          <br /> Configuration
        </button>
      {showConfig && 
      <>
      <div className="sliders">
        <RangeSlider
        value={ease}
        label="Ease of setup"
        setValue={(value) => setValue("ease", value)}
      />
      <RangeSlider
        value={numberInstruments}
        label="Number of instruments"
        setValue={(value) => setValue("numberInstruments", value)}
      />
      <RangeSlider
        value={heavyRotation}
        label="Favor Heavy Rotation"
        setValue={(value) => setValue("heavyRotation", value)}
        step={0.5}
      />
      <RangeSlider
        value={acceptableVolume}
        label="Acceptable Volume"
        setValue={(value) => setValue("acceptableVolume", value)}
      />
      <RangeSlider
        value={conventionality}
        label="Conventionality"
        setValue={(value) => setValue("conventionality", value)}
      />
      </div>
    
      <div className="checkboxes">
        <Checkbox
          checked={isAcoustic}
          onChange={(value) => setValue("isAcoustic", value)}
          label="acoustic"
        />
        <Checkbox
          checked={isElectric}
          onChange={(value) => setValue("isElectric", value)}
          label="electric"
        />
        <Checkbox
          checked={isDigital}
          onChange={(value) => setValue("isDigital", value)}
          label="digital"
        />
        <Checkbox
          checked={isRhythmTrack}
          onChange={(value) => setValue("isRhythmTrack", value)}
          label="use rhythm track"
        />
        <input
          type="datetime-local"
          value={timeDate ? moment(timeDate).format("YYYY-MM-DDTHH:mm") : ""}
          onChange={(e) =>
            setValue("timeDate", moment(e.target.value).toDate())
          }
        />
      </div>
      </>}
      <style jsx>{`
        .configuration {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .sliders {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .checkboxes {
          display: flex;
          flex-wrap: wrap;
          max-width: 450px;
          gap: 15px;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default Configuration;

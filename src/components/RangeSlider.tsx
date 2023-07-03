import React from "react";


type RangeSliderProps = {
  value: number;
  setValue: (value: number) => void;
  label: string;
  range?: number;
  step?: 0.5 | 1;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  value,
  setValue,
  label,
  step = 1,
  range = 3,
}) => {
  return (
    <section
      className="rangeSlider"
    >
      <div className="slider">
        <input
          id={label}
          type="range"
          min="1"
          max={range}
          step={step}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />

        <div className="numbers">
          {[...Array(range)].map((_, index) => {
            const number = index + 1;
            return (
              <span
                key={number}
                style={{
                  fontWeight: value === number ? "bold" : "normal",
                }}
              >
                {number}
              </span>
            );
          })}
        </div>
      </div>
      <label htmlFor={label}>{label}</label>
      <style jsx>
        {`
          .rangeSlider {
            display: grid;
            grid-template-columns: minmax(100px, 200px) 1fr;
            gap: 24px;
       
          }

          input {
            width: 100%;
          }

          .numbers {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </section>
  );
};

export default RangeSlider;

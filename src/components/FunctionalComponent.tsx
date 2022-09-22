import { useState } from "react";

interface FunctionalComponentProps {
  title: string;
  subtitle?: string;
}

interface Pasta {
  name: string;
  description: string;
  id: number;
}

const FunctionalComponent = ({ title, subtitle }: FunctionalComponentProps) => {
  // or const FunctionalComponent = (props: FunctionalComponentProps) => {}

  // this is our state initialization
  const [counter, setCounter] = useState(0);
  // the right number type is infered by TS based on which value you initialize your state with!

  const [selectedPasta, setSelectedPasta] = useState<Pasta | null>(null);
  // specifying a type argument to useState is useful when you're passing an initial value
  // which doesn't reflect the whole possible typeset of the variable and might change in the future

  return (
    <div>
      <h2>{title.toUpperCase()}</h2>
      <p>{subtitle}</p>
      <hr />
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <div>
          <p>Counter is: {counter.toPrecision(2)}</p>
        </div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>

      <button
        onClick={() =>
          setSelectedPasta({
            name: "Carbonara",
            description: "Pasta with Guanciale and Pecorino and Egg yolks",
            id: 2,
          })
        }
      >
        Set Pasta
      </button>

      <p>{selectedPasta && `you selected: ${selectedPasta}`}</p>
    </div>
  );
};

export default FunctionalComponent;

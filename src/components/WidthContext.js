import { createContext, useContext, useState } from "react";

const WidthContext = createContext();

export const useWidth = () => {
  return useContext(WidthContext);
};

export const WidthProvider = ({ children }) => {
  const [backblazeComWidth, setBackblazeComWidth] = useState(0);
  const [bunnyNetWidth, setBunnyNetWidth] = useState(0);
  const [scalewayComWidth, setScalewayComWidth] = useState(0);
  const [vultrComWidth, setVultrComWidth] = useState(0);

  return (
    <WidthContext.Provider
      value={{
        backblazeComWidth,
        setBackblazeComWidth,
        bunnyNetWidth,
        setBunnyNetWidth,
        scalewayComWidth,
        setScalewayComWidth,
        vultrComWidth,
        setVultrComWidth,
      }}
    >
      {children}
    </WidthContext.Provider>
  );
};

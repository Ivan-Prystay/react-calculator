import { useEffect, useState } from "react";
import { useWidth } from "./WidthContext";

import Range from "./Range/Range";
import {
  AllRangeContainer,
  GeneralContainer,
  RangeContainer,
  SpanContainer,
  TypeRangeContainer,
} from "./App.styled";
import BackblazeCom from "./Providers/BackblazeCom";
import BunnyNet from "./Providers/BunnyNet";
import ScalewayCom from "./Providers/Scaleway";
import VultrCom from "./Providers/VultrCom";

function App() {
  const [storage, setStorage] = useState(0);
  const [transfer, setTransfer] = useState(0);
  const [min, setMin] = useState();

  const { backblazeComWidth, bunnyNetWidth, scalewayComWidth, vultrComWidth } =
    useWidth();

  const handleStorageChange = (newValue) => {
    setStorage(newValue);
  };

  const handleTransferChange = (newValue) => {
    setTransfer(newValue);
  };

  const minWidth = Math.min(
    backblazeComWidth,
    bunnyNetWidth,
    scalewayComWidth,
    vultrComWidth
  );

  useEffect(() => {
    setMin(minWidth);
  }, [minWidth]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Provider calculator</h1>

      <GeneralContainer>
        <AllRangeContainer>
          <TypeRangeContainer>
            <SpanContainer>
              <span>Storage:</span>
              <span>{storage} GB</span>
            </SpanContainer>
            <RangeContainer>
              <Range storage onChange={handleStorageChange} />
            </RangeContainer>
            <SpanContainer>
              <span>0</span>
              <span>100</span>
            </SpanContainer>
          </TypeRangeContainer>

          <TypeRangeContainer>
            <SpanContainer>
              <span>Transfer:</span>
              <span>{transfer} GB</span>
            </SpanContainer>

            <RangeContainer>
              <Range transfer onChange={handleTransferChange} />
            </RangeContainer>

            <SpanContainer>
              <span>0</span>
              <span>100</span>
            </SpanContainer>
          </TypeRangeContainer>
        </AllRangeContainer>

        <div>
          <BackblazeCom
            inputValue={{
              storage,
              transfer,
              isMin: min === backblazeComWidth,
            }}
          />
          <BunnyNet
            inputValue={{
              storage,
              transfer,
              isMin: min === bunnyNetWidth,
            }}
          />
          <ScalewayCom
            inputValue={{
              storage,
              transfer,
              isMin: min === scalewayComWidth,
            }}
          />
          <VultrCom
            inputValue={{
              storage,
              transfer,
              isMin: min === vultrComWidth,
            }}
          />
        </div>
      </GeneralContainer>
    </>
  );
}

export default App;

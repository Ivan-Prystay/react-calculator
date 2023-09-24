import { useEffect, useState } from "react";
import Range from "./range/range";
import BackblazeCom from "./backblaze.com/backblazeCom";
import BunnyNet from "./bunny.net/bunnyNet";
import ScalewayCom from "./scaleway.com/Scaleway";
import VultrCom from "./vultr.com/VultrCom";
import { useWidth } from "./WidthContext";

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
    <div>
      <>
        <span>Storage: {storage} GB</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderLeftWidth: "10px",
            borderLeftColor: "black",
            borderLeftStyle: "solid",
            borderRightWidth: "10px",
            borderRightColor: "black",
            borderRightStyle: "solid",
            marginBottom: "15px",
          }}
        >
          <Range storage onChange={handleStorageChange} />
        </div>

        <span>Transfer: {transfer} GB</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderLeftWidth: "10px",
            borderLeftColor: "black",
            borderLeftStyle: "solid",
            borderRightWidth: "10px",
            borderRightColor: "black",
            borderRightStyle: "solid",
          }}
        >
          <Range transfer onChange={handleTransferChange} />
        </div>
      </>

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
    </div>
  );
}

export default App;

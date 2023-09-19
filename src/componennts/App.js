import { useState } from "react";
import Range from "./range/range";
import BackblazeCom from "./backblaze.com/backblazeCom";
import BunnyNet from "./bunny.net/bunnyNet";

function App() {
  const [storage, setStorage] = useState(0);
  console.log("storage: ", typeof storage);
  const [transfer, setTransfer] = useState(0);

  const handleStorageChange = (newValue) => {
    setStorage(newValue);
  };

  const handleTransferChange = (newValue) => {
    setTransfer(newValue);
  };

  return (
    <div>
      <>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Storage: {storage} GB</span>
          <Range storage onChange={handleStorageChange} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Transfer: {transfer} GB</span>
          <Range transfer onChange={handleTransferChange} />
        </div>
      </>
      <div>
        <BackblazeCom inputValue={{ storage, transfer }} />
        <BunnyNet inputValue={{ storage, transfer }} />

        <div>scaleway.com</div>
        <div>vultr.com</div>
      </div>
    </div>
  );
}

export default App;

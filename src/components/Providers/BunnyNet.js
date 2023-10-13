import { useEffect, useState } from "react";
import { useWidth } from "../WidthContext";

import {
  ProviderContainer,
  ProviderDescription,
} from "components/ProviderElements/ProviderElements";
import { Scale } from "../Scale/Scale";
import BunnyImage from "../../icons/bunny.png";

const BunnyNet = ({ inputValue }) => {
  const [selectedDisk, setSelectedDisk] = useState("hdd"); // Початково вибраний HDD

  const { storage, transfer, isMin } = inputValue;

  const { bunnyNetWidth, setBunnyNetWidth } = useWidth();

  const maxPrice = 10;
  const bunnyStorageHDDPrice = 0.01;
  const bunnyStorageSSDPrice = 0.02;
  const bunnyTransferPrice = 0.01;

  let price;
  if (selectedDisk === "hdd") {
    price = bunnyStorageHDDPrice;
  } else {
    price = bunnyStorageSSDPrice;
  }

  let total = price * storage + bunnyTransferPrice * transfer;

  if (total > maxPrice) {
    total = maxPrice;
  }

  const handleDiskChange = (event) => {
    setSelectedDisk(event.target.id);
  };

  useEffect(() => setBunnyNetWidth(total), [setBunnyNetWidth, total]);

  return (
    <ProviderContainer>
      <ProviderDescription>
        <form>
          <legend>bunny</legend>
          <input
            id="hdd"
            type="radio"
            name="disk"
            checked={selectedDisk === "hdd"}
            onChange={handleDiskChange}
          />
          <label htmlFor="hdd">HDD</label>
          <input
            id="ssd"
            type="radio"
            name="disk"
            checked={selectedDisk === "ssd"}
            onChange={handleDiskChange}
          />
          <label htmlFor="ssd">SSD</label>
        </form>
        <img src={BunnyImage} alt="BunnyImage" height={30} />
      </ProviderDescription>
      <Scale width={bunnyNetWidth} color={(isMin && "#FF9900") || "grey"} />
      <p style={{ marginLeft: "20px" }}>{+total.toFixed(2)}$</p>
    </ProviderContainer>
  );
};

export default BunnyNet;

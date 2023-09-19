import { Scale } from "../scale/Scale";

import BunnyImage from "../../icons/bunny.png";
import { useState } from "react";

const BunnyNet = ({ inputValue }) => {
  const [selectedDisk, setSelectedDisk] = useState("hdd"); // Початково вибраний HDD

  const { storage, transfer } = inputValue;

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
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
      <Scale width={total} />
      <p style={{ marginLeft: "20px" }}>{total.toFixed(2)}$</p>
    </div>
  );
};

export default BunnyNet;

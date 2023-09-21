import { Scale } from "../scale/Scale";

import BunnyImage from "../../icons/bunny.png";
import { useEffect, useState } from "react";
import { useWidth } from "../WidthContext";

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "150px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRight: "10px",
          borderRightColor: "black",
          borderRightStyle: "solid",
          paddingLeft: "20px",
          paddingRight: "20px",
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
      </div>
      <Scale width={bunnyNetWidth} color={(isMin && "#FF9900") || "grey"} />
      <p style={{ marginLeft: "20px" }}>{+total.toFixed(2)}$</p>
    </div>
  );
};

export default BunnyNet;
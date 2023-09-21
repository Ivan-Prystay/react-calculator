import { Scale } from "../scale/Scale";

import ScalewayImage from "../../icons/scaleway.png";
import { useEffect, useState } from "react";
import { useWidth } from "../WidthContext";

const ScalewayCom = ({ inputValue }) => {
  const [selectedDisk, setSelectedDisk] = useState("single");

  const { storage, transfer, isMin } = inputValue;
  const { scalewayComWidth, setScalewayComWidth } = useWidth();

  let scalewayMultiPrice = 0.06;
  let scalewaySinglePrice = 0.03;
  let scalewayTransferPrice = 0.02;

  if (storage < 75) {
    scalewayMultiPrice = 0;
    scalewaySinglePrice = 0;
  }

  if (transfer < 75) {
    scalewayTransferPrice = 0;
  }

  let price;
  if (selectedDisk === "single") {
    price = scalewaySinglePrice;
  } else {
    price = scalewayMultiPrice;
  }

  let total = price * (storage - 75) + scalewayTransferPrice * (transfer - 75);

  const handleDiskChange = (event) => {
    setSelectedDisk(event.target.id);
  };

  useEffect(() => setScalewayComWidth(total), [setScalewayComWidth, total]);

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
          <legend>scaleway</legend>
          <input
            id="multi"
            type="radio"
            name="disk"
            checked={selectedDisk === "multi"}
            onChange={handleDiskChange}
          />
          <label htmlFor="multi">Multi</label>
          <input
            id="single"
            type="radio"
            name="disk"
            checked={selectedDisk === "single"}
            onChange={handleDiskChange}
          />
          <label htmlFor="single">Single</label>
        </form>
        <img src={ScalewayImage} alt="Scaleway" height={30} />
      </div>

      <Scale width={scalewayComWidth} color={(isMin && "#FF00FF") || "grey"} />
      <p style={{ marginLeft: "20px" }}>{+total.toFixed(2)}$</p>
    </div>
  );
};

export default ScalewayCom;

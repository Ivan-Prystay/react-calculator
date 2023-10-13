import { useEffect, useState } from "react";
import { useWidth } from "../WidthContext";

import { Scale } from "../Scale/Scale";
import ScalewayImage from "../../icons/scaleway.png";
import {
  ProviderContainer,
  ProviderDescription,
} from "components/ProviderElements/ProviderElements";

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
    <ProviderContainer>
      <ProviderDescription>
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
      </ProviderDescription>

      <Scale width={scalewayComWidth} color={(isMin && "#FF00FF") || "grey"} />
      <p style={{ marginLeft: "20px" }}>{+total.toFixed(2)}$</p>
    </ProviderContainer>
  );
};

export default ScalewayCom;

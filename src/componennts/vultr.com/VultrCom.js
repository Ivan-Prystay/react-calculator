import { Scale } from "../scale/Scale";

import VultrImage from "../../icons/vultr.png";
import { useWidth } from "../WidthContext";
import { useEffect } from "react";

const VultrCom = ({ inputValue }) => {
  const { storage, transfer, isMin } = inputValue;

  const { vultrComWidth, setVultrComWidth } = useWidth();

  const minPrice = 5;
  const storagePrice = 0.01;
  const transferPrice = 0.01;

  let total = storagePrice * storage + transferPrice * transfer;

  if (total <= minPrice) {
    total = minPrice;
  }

  useEffect(() => setVultrComWidth(total), [setVultrComWidth, total]);

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
        <p>vultr</p>
        <img src={VultrImage} alt="#" />
      </div>

      <Scale width={vultrComWidth} color={(isMin && "#4a86e8") || "grey"} />
      <p style={{ marginLeft: "20px" }}>{+total.toFixed(2)}$</p>
    </div>
  );
};

export default VultrCom;

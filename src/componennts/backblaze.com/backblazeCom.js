import { Scale } from "../scale/Scale";

import BackblazeImage from "../../icons/backblaze.png";
import { useWidth } from "../WidthContext";
import { useEffect } from "react";

const BackblazeCom = ({ inputValue }) => {
  const { storage, transfer, isMin } = inputValue;

  const { backblazeComWidth, setBackblazeComWidth } = useWidth();

  const minPrice = 7;
  const backblazeStoragePrice = 0.005;
  const backblazeTransferPrice = 0.01;

  let total =
    backblazeStoragePrice * storage + backblazeTransferPrice * transfer;

  if (total <= minPrice) {
    total = minPrice;
  }

  useEffect(() => {
    setBackblazeComWidth(total);
  }, [setBackblazeComWidth, total]);

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
        <p>backblaze</p>
        <img src={BackblazeImage} alt="#" />
      </div>
      <Scale width={backblazeComWidth} color={(isMin && "#FF0000") || "grey"} />

      <p style={{ marginLeft: "20px" }}>{+total.toFixed(2)}$</p>
    </div>
  );
};

export default BackblazeCom;

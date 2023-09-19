import { Scale } from "../scale/Scale";

import BackblazeImage from "../../icons/backblaze.png";

const BackblazeCom = ({ inputValue }) => {
  const { storage, transfer } = inputValue;

  const minPrice = 7;
  const backblazeStoragePrice = 0.005;
  const backblazeTransferPrice = 0.01;

  let total =
    backblazeStoragePrice * storage + backblazeTransferPrice * transfer;

  if (total <= minPrice) {
    total = minPrice;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>backblaze</p>
      <img src={BackblazeImage} alt="#" />
      <Scale width={total} />
      <p style={{ marginLeft: "20px" }}>{total.toFixed(2)}$</p>
    </div>
  );
};

export default BackblazeCom;

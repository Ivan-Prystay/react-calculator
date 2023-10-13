import { useWidth } from "../WidthContext";
import { useEffect } from "react";

import { Scale } from "../Scale/Scale";
import {
  ProviderContainer,
  ProviderDescription,
} from "components/ProviderElements/ProviderElements";
import BackblazeImage from "../../icons/backblaze.png";

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
    <ProviderContainer>
      <ProviderDescription>
        <p>backblaze</p>
        <img src={BackblazeImage} alt="#" />
      </ProviderDescription>
      <Scale width={backblazeComWidth} color={(isMin && "#FF0000") || "grey"} />

      <p style={{ marginLeft: "20px" }}>{+total.toFixed(2)}$</p>
    </ProviderContainer>
  );
};

export default BackblazeCom;

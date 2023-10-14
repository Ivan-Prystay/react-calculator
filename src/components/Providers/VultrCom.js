import { useWidth } from "../WidthContext";
import { useEffect } from "react";

import { Scale } from "../Scale/Scale";
import VultrImage from "../../icons/vultr.png";
import {
  ProviderContainer,
  ProviderDescription,
  TotalPrice,
} from "components/ProviderElements/ProviderElements";

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
    <ProviderContainer>
      <ProviderDescription>
        <p>vultr</p>
        <img src={VultrImage} alt="#" height={30} />
      </ProviderDescription>
      <Scale width={vultrComWidth} color={(isMin && "#4a86e8") || "grey"} />
      <TotalPrice>{+total.toFixed(2)} $</TotalPrice>
    </ProviderContainer>
  );
};

export default VultrCom;

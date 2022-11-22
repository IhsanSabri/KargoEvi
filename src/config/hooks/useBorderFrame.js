import { useState } from "react";

export function useBorderFrame() {
  const [borderedValue, setBorderedValue] = useState(null);

  const setItemValue = (value) => {
    setBorderedValue(value);
  };

  return { borderedValue, setItemValue };
}

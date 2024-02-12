import React, { useEffect, useState } from "react";
import { JsonSerializable } from "./jsonTypes";

export function useLocalStorage<T = JsonSerializable>(
  key: string,
  initialDefault: T
) {
  const [val, setVal] = useState<T>(() => {
    const localStorageVal = localStorage.getItem(key);

    return localStorageVal !== null
      ? JSON.parse(localStorageVal)
      : initialDefault;
  });

  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      setVal(initialDefault);
    }
  }, [key, initialDefault]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal] as [T, React.Dispatch<React.SetStateAction<T>>];
}

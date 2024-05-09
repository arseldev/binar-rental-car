import { createContext } from "react";
export const CarsContext = createContext({
  cars: [],
});

export const LoaderContext = createContext(false);

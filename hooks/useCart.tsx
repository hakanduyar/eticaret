"use client";
import { createContext, useState } from "react";

interface CartContextProps {
  productCardQty: number;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCardQty] = useState(0);

  let value = {
    productCartQty,
  };
  return <CartContext.Provider value={value} {...props} />;
};

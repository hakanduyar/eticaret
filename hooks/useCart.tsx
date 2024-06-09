"use client";
import { createContext, useState } from "react";

interface CartContextProps {
  productCartQty: number;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);

  let value = {
    productCartQty,
  };
  return <CartContext.Provider value={value} {...props} />;
};

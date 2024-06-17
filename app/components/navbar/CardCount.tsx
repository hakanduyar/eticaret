"use client";
import useCart from "@/hooks/useCart";
import { SlBasket } from "react-icons/sl";
const CardCount = () => {
  const { cartPrdcts } = useCart();

  return (
    <div className="hidden items-center md:flex relative">
      <div className="absolute top-0 right-0 text-xs bg-orange-500 text-white w-4 h-4 flex items-center justify-center rounded-full transform translate-x-1/2 -translate-y-1/2">
        {cartPrdcts?.length}
      </div>
      <span className="ml-2">Sepetim</span>
      <SlBasket size={20} className="relative" />
    </div>
  );
};

export default CardCount;

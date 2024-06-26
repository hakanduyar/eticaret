"use client";

import useCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
const CartClient = () => {
  const { cartPrdcts, removeFromCart, removeCart } = useCart();

  console.log(cartPrdcts, "cartPrdcts");
  if (!cartPrdcts || cartPrdcts.length == 0)
    return <div>Sepetinizde Ürün Bulunmamaktadır...</div>;

  // let cartPrdctsTotal = cartPrdcts.reduce((acc: any, item:))

  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="hidden md:flex items-center gap-3 justify-between border-b-2 pb-2">
          <div className="w-1/5">Ürün Resmi</div>
          <div className="w-1/5">Ürün Adı</div>
          <div className="w-1/5">Ürün Miktarı</div>
          <div className="w-1/5">Ürün Fiyatı</div>
          <div className="w-1/5 underline">
            <button onClick={() => removeCart()}>Sepeti Sil</button>
          </div>
        </div>
        <div className="space-y-4">
          {cartPrdcts.map((cart) => (
            <div
              key={cart.id}
              className="flex items-center justify-between border-b-2 pb-2"
            >
              <div className="w-1/5">
                <Image
                  src={cart.image}
                  width={40}
                  height={40}
                  alt={cart.name}
                />
              </div>
              <div className="w-1/5">{cart.name}</div>
              <div className="w-1/5 ">2</div>
              <div className="w-1/5">{cart.price}₺</div>
              <div className="w-1/5">
                <AiFillDelete
                  size={20}
                  className="w-1/5 cursor-pointer text-red-600"
                  onClick={() => removeFromCart(cart)}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold text-end text-orange-600">
            1000₺
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;

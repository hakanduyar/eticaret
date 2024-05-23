import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[240px] shadow-lg p-2">
      <div className="relative h-[200px]">
        <Image src={product.image} fill alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default ProductCard;

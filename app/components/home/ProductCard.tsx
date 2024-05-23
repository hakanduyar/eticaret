import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[240px] shadow-lg p-2 rounded-md">
      <div className="relative h-[150px]">
        <Image
          src={product.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProductCard;

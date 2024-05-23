import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[237px] bg-orange-500 flex items-center justify-center">
      <div className="h-[137px] relative w-full">
        <Image
          src={"/hepsiburada-da-pesin-fiyatina-2-tak2023-11-01.webp"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;

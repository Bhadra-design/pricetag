import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <div className={`price-info_card`}>
      <p className="text-base text-black-100 font-semibold">{title}</p>
      <div className="flex gap-1 ">
        <Image
          src={iconSrc}
          alt={title}
          width={24}
          height={24}
          className="object-contain"    
        />
        <p className="text-2xl font-bold text-secondary ml-3">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;

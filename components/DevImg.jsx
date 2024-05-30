import Image from "next/image";
import React from "react";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        className="absolute left-[-20px] top-[40px]"
        width={500}
        height={500}
        priority
        alt="Samir Pandey"
      />
    </div>
  );
};

export default DevImg;

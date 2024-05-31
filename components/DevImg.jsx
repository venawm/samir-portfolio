import Image from "next/image";
import React from "react";

const DevImg = ({ containerStyles, imgSrc, imgClass }) => {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        className={imgClass}
        width={500}
        height={500}
        priority
        alt="Samir Pandey"
      />
    </div>
  );
};

export default DevImg;

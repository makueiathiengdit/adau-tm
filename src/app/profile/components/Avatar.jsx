import Image from "next/image";
import React from "react";

const Avatar = ({ src, width = 110, height = 110 }) => {
  return (
    <div>
      <Image
        src={src}
        width={width}
        height={height}
        className="img-fluid rounded-start"
      ></Image>
    </div>
  );
};

export default Avatar;

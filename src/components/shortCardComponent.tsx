import * as React from "react";

type componentNameProps = {
  image: string;
  text: string;
};

const ShortCardComponent = ({ image, text }: componentNameProps) => {
  return (
    <div className="flex items-center bg-white p-5">
      <div>
        <div className="text-xs text-secondary">{text}</div>
        <div>2342</div>
      </div>
      <div className="ml-5">
        <img src={image} />
      </div>
    </div>
  );
};

export default ShortCardComponent;

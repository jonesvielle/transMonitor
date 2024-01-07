import * as React from "react";

type TileComponentProps = {
  icon?: any;
  text: string;
};

const TileComponent = ({ icon, text }: TileComponentProps) => {
  return (
    <div className="px-5 hover:bg-sky-50 hover:border-s-4 py-2 hover:border-blue flex">
      {icon}
      <div
        className={
          icon === undefined
            ? "text-secondary text-xs"
            : "text-secondary text-xs ml-3"
        }
      >
        {text}
      </div>
    </div>
  );
};

export default TileComponent;

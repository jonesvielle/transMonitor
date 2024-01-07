import * as React from "react";

type TableTileComponentProps = {
  itemType: string;
  price: string;
  transactionNo: string;
  time: string;
  paymentState: string;
};

const TableTileComponent = ({
  itemType,
  price,
  transactionNo,
  time,
  paymentState,
}: TableTileComponentProps) => {
  return (
    <div className="flex text-sm items-center py-5 mt-2 bg-white">
      {" "}
      <div className=" w-1/12 flex">
        <div className="bg-darkGrey p-2 text-white rounded-full">VW</div>
      </div>{" "}
      <div className=" w-5/12">{itemType}</div>
      <div className=" w-1/12">{price}</div>
      <div className=" w-2/12">{transactionNo}</div>
      <div className=" w-1/12">{time}</div>
      <div className="w-1/12">
        <div
          className={
            paymentState === "Reconcilled"
              ? "border text-green rounded-2xl text-center"
              : paymentState === "Pending"
              ? "border text-yellow-500 rounded-2xl text-center"
              : "border rounded-2xl text-secondary text-center"
          }
        >
          {paymentState}
        </div>
      </div>
    </div>
  );
};

export default TableTileComponent;

import { Skeleton } from "components/Skeleton";
import React from "react";

const TotalRegistered = ({ amount }) => {
  return (
    <div className="bg-dark rounded-md rounded-l-none border-banano-yellow border-l-4 w-full md:max-w-[320px] drop-shadow-md shadow-black">
      <div className="p-4 flex justify-center items-center flex-col gap-4">
        <div className="text-gray-200 text-xl">Services Registered</div>
        <div>
          <div className="text-2xl text-gray-100">
            {amount ? amount : <Skeleton size="w-[100px] h-[32px]" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRegistered;
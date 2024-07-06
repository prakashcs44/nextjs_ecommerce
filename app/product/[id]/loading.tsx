import React from "react";

function loading() {
  return (
    <div className=" flex  items-center flex-col xl:flex-row gap-10 md:px-20 px-10 py-10 justify-center ">
      <div className="w-[30%] h-96 bg-slate-200 animate-pulse border" />
      <div className="space-y-10  w-[60%]">
      <div className="w-[50%] h-10 bg-slate-200 animate-pulse" />
      <div className="w-[70%] h-8 bg-slate-200 animate-pulse" />
      <div className="w-[20%] h-8 bg-slate-200 animate-pulse" />
      <div className="w-[20%] h-8 bg-slate-200 animate-pulse" />
      </div>
    </div>
  );
}

export default loading;

"use client";

import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[10rem] bg-[#fff] justify-between items-center p-[2.8rem] border-b-[2px]">
      <div className="text-[3.6rem] text-[#6c5dd3] font-bold">자유마켓</div>
      <div className="p-[1.4rem] px-[1.6rem] rounded-full border w-[32rem] flex gap-[1.2rem] items-center bg-[#eee]">
        <SearchOutlined className="text-[2.1rem]" />
        <input
          type="text"
          placeholder="Search items"
          className="w-[100%] bg-inherit outline-none text-[#000] text-[1.6rem]"
        />
      </div>
      <div className="text-[#000] cursor-pointer">
        <p className="text-[2rem]">대시보드</p>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const CollectionItem = ({ children }: any) => {
  return (
    <li className="border p-[1.2rem] w-full rounded-full hover:bg-slate-200 cursor-pointer">
      {children}
    </li>
  );
};

const Main = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-[4.8rem] text-center mt-[10%]">
        Explore Collections
      </h1>
      <ul className="flex items-center w-full justify-center gap-[2rem] text-[2rem] text-center mt-[3.2rem]">
        <CollectionItem>책</CollectionItem>
        <CollectionItem>영화</CollectionItem>
        <CollectionItem>동물</CollectionItem>
        <CollectionItem>선물</CollectionItem>
        <CollectionItem>카드</CollectionItem>
        <CollectionItem>기타</CollectionItem>
      </ul>
    </div>
  );
};

export default Main;

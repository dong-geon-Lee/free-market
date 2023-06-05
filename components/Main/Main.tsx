import dataItems from "@/data/data";
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
      <h1 className="text-[4.8rem] text-center mt-[10%]">물품 둘러보기</h1>
      <ul className="flex items-center w-full justify-center gap-[2rem] text-[2rem] text-center mt-[3.2rem]">
        <CollectionItem>책</CollectionItem>
        <CollectionItem>영화</CollectionItem>
        <CollectionItem>동물</CollectionItem>
        <CollectionItem>선물</CollectionItem>
        <CollectionItem>카드</CollectionItem>
        <CollectionItem>기타</CollectionItem>
      </ul>

      <div className="cards my-[3.6rem] flex flex-wrap justify-around gap-[3.2rem]">
        {dataItems.map((data) => (
          <div className="card w-[30rem] h-[40rem]">
            <img
              src={data.image}
              alt={data.image}
              className="flex-1 w-[30rem] h-[20rem]"
            />
            <div className="flex-1 p-[3.6rem] py-[3rem]">
              <h1 className="text-[2rem] font-bold leading-[3rem]">
                {data.title}
              </h1>
              <label className="text-[2rem] font-normal leading-[3rem]">
                {data.price}
              </label>
              <p className="text-[1.6rem] font-normal leading-[3rem]">
                {data.location}
              </p>
              <div className="flex gap-[1.2rem] text-[1.6rem] font-normal leading-[3rem]">
                <span>관심 {data.interest}</span>
                <span>댓글 {data.comments}</span>
                <span className="flex">{data.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

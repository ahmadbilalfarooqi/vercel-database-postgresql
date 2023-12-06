"use client";
import React, { useState } from "react";
import InputPage from "./input";

const Main = ({ data }: any) => {
  const [obj, setObj] = useState({});
  return (
    <div>
      <div>
        <InputPage ojb={obj} />
      </div>
      {data.map((val: any, i: any) => {
        return (
          <div className="w-[500px] flex justify-between" key={i}>
            <p className="text-xl mt-5">{`${val.username}`}</p>
            <button onClick={() => setObj(val)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

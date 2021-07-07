import React, { useState } from "react";

const CardCount = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    setNum(num - 1);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNum}>Add</button>
            <button onClick={decNum}>Sub</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCount;

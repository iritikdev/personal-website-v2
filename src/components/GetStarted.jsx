import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";
function GetStarted(props) {
  return (
    <div
      className={`${styles.flexCenter} flex-col cursor-pointer border-solid border-slate-500 border-2 w-[100%] h-[100%] rounded-[4px]`}
    >
      <div className={`${styles.flexStart} flex-row px-6 py-4`}>
        <p className="font-roboto mr-2 s-medium text-[18px] leading-[23px] text-gradient">
          Checkout Projects
        </p>
        <img
          src={arrowUp}
          alt=""
          className="w-[22px] h-[22px] object-contain"
        />
      </div>
    </div>
  );
}

export default GetStarted;

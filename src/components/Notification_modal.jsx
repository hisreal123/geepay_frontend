import { ArrowLeft } from "iconsax-react";
import React from "react";

const Notification_modal = () => {
  const [nofi, setNoti] = React.useState(true);

  return (
    <div
      className={` ${
        nofi ? " w-full " : "hidden"
      } bg-white px-4 py-3 lg:w-[300px]  lg:h-fit z-50 fixed top-0 bottom-0  lg:top-20  lg:right-10 lg:shadow-xl lg:border-[1px] lg:border-[#EDF2F7] lg:rounded-[14px] `}
    >
      <div className="py-2 lg:hidden">
        <ArrowLeft
          onClick={() => {
            setNoti(!nofi);
          }}
        />
      </div>
      <div className="bg-white lg:pb-5 ">
        <div className="btm pt-3">
          <h3>
            Yho!!, You&apos;ve got <b>0</b> notifications
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Notification_modal;

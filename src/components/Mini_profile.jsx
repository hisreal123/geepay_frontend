import { ArrowLeft } from "iconsax-react";
import React from "react";
import user_img1 from "/assets/profile_images/img1.jpg";

const Mini_profile = () => {
  const [m_profile, setM_profile] = React.useState(true);

  return (
    <div
      className={` ${
        m_profile ? " w-full " : "hidden"
      } bg-white px-4 py-3 lg:w-[300px]  lg:h-fit z-50 fixed top-0 bottom-0  lg:top-20  lg:right-10 lg:shadow-xl lg:border-[1px] lg:border-[#EDF2F7] lg:rounded-[14px]`}
    >
      <div className="py-2 lg:hidden">
        <ArrowLeft
          onClick={() => {
            setM_profile(!m_profile);
          }}
        />
      </div>
      <div className="bg-white lg:pb-5 ">
        <div className=" h-24 w-24 lg:h-16 lg:w-16 relative rounded-full flex justify-center items-center flex-col">
          <img
            src={user_img1}
            alt="user_profile_image"
            aria-label={`${user_img1}'s profile pic`}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="wrap mt-5">
        <h3 className="font-bold text-2xl">Justin Bergson</h3>
        <h5 className="text-lg">Justin@gmail.com</h5>
      </div>

      <div className="btm pt-3">
        <h3> Nothing else here .. </h3>
      </div>
    </div>
  );
};

export default Mini_profile;

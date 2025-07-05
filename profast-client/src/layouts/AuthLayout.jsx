import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen p-12  ">
      <div>
         <ProFastLogo />
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 my-10 py-20 px-10 rounded-md">
        <div className="flex-1 border-l">
             <img src={authImg} className="" />
        </div>
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;

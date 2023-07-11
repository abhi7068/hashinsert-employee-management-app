// import React from 'react'

import Button from "../../components/Button/index";

function LandingPage() {
  return (
    <>
      <div className="grid  w-100% tablet:grid-cols-1 grid-cols-2 gap-6">
        <div className="w-100% tablet:order-2 flex flex-col justify-evenly space-y-8">
          <div className=" text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-950">
            Employee Management App
          </div>

          <div className=" leading-relaxed text-left text-lg text-black/70">
            Welcome to WorkForcePro, the ultimate employee management app
            designed to streamline your business operations and revolutionize
            the way you manage your workforce. With our powerful suite of
            features and intuitive interface, we empower businesses of all sizes
            to maximize efficiency, boost productivity, and foster a harmonious
            work environment.
          </div>
          <div className="mb-4">
            <Button content="Login" />
          </div>
        </div>
        <div className="w-100% tablet:order-1">
          <img src={"/LandingPage2.svg"} alt="LandingPage" className="w-100%" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;

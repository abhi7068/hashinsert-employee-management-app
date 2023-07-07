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

          <div className=" leading-relaxed text-left text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            corrupti veniam ipsum reprehenderit deleniti a in sed accusantium
            fuga quod blanditiis incidunt nihil illum, deserunt modi sit. Iure,
            dolorem doloribus?
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

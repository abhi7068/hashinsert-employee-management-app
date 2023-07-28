import LeaveRequestsFrorm from "./LeaveRequestsFrorm";

const leaveRequests = () => {
  return (
    <>
      <div className=" text-xl font-bold text-primary-button mb-12">
        Leave Requests
      </div>
      <div className=" grid grid-cols-1 gap-12 md:grid-cols-2 mb-16">
        <div className=" w-full ">
          <img src="/leave2.svg" alt="Leave Svg" className=" w-full" />
        </div>

        <div className=" w-full ">
          <LeaveRequestsFrorm className=" flex " />
        </div>
      </div>
    </>
  );
};

export default leaveRequests;

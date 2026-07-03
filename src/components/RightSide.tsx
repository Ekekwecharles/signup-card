import { FaArrowRight } from "react-icons/fa6";

export default function RightSide() {
  return (
    <div className="h-full bg-[#260C30] flex flex-col items-center justify-center p-12">
      <div className="w-[80%] mx-auto max-w-[400px]">
        <div>
          <img src="/sponsors.png" height="150" width="250" alt="Sponsors" />
        </div>
        <div className="text-[44px] font-extrabold text-[#CFAADC] alata-regular leading-13 mt-8">
          Unlocking Growth Explore Diverse Marketing Channels
        </div>
        <div>
          <div className="flex items-center mt-12 mb-6 gap-2">
            <div className="w-[20px] h-[20px] bg-[#FFB3C7] rounded-full flex items-center">
              <FaArrowRight className="-translate-x-[1px]" />
            </div>
            <p className="text-[#DEE3E7] text-xs font-semibold">
              An Optimizer will reach out to set up a discovery meeting with
              you.
            </p>
          </div>

          <div className="flex items-center mb-6 gap-2">
            <div className="w-[20px] h-[20px] bg-[#FFB3C7] rounded-full flex items-center">
              <FaArrowRight className="-translate-x-[1px]" />
            </div>
            <p className="text-[#DEE3E7] text-xs font-semibold">
              Then, we will prepare and schedule you a customized demo.
            </p>
          </div>

          <div className="flex items-center mb-6 gap-2">
            <div className="w-[20px] h-[20px] bg-[#FFB3C7] rounded-full flex items-center">
              <FaArrowRight className="-translate-x-[1px]" />
            </div>
            <p className="text-[#DEE3E7] text-xs font-semibold">
              Then, we will prepare and schedule you a customized demo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

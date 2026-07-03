import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LeftSide() {
  return (
    <div className="bg-[#4E1B60] h-full flex flex-col items-center justify-center relative p-12">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <svg
          width="150"
          height="146"
          viewBox="0 0 194 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M191 170C191 170 173.751 103.314 102.932 95.2056C102.932 95.2056 102.091 7.12993 0 0V169.86H191V170Z"
            stroke="#542167"
            stroke-width="5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="z-10 w-[80%] mx-auto max-w-[400px]">
        <div className="bg-[#FFFFFF] rounded-lg p-8 flex flex-col items-center justify-center">
          <p className="text-4xl font-extrabold text-[#A946BA] alata-regular leading-7">
            chattrn
          </p>
          <p className="text-[#1A1F26] font-semibold my-4">
            Create your free account
          </p>

          <button className="bg-[#1093F4] w-full py-2 rounded-lg text-white font-semibold mb-4 flex items-center justify-center gap-2">
            <FaFacebook className="text-[#FFFFFF] text-xl" /> Continue with
            Facebook
          </button>
          <button className="bg-[#EDF1F3] w-full py-2 rounded-lg text-dark font-semibold flex items-center justify-center gap-2">
            <FcGoogle className="text-xl" /> Continue with Google
          </button>

          <p className="text-[#1A1F26] text-sm mt-8">
            Already have an account?{" "}
            <a href="/login" className="text-[#A946BA] underline">
              Login
            </a>
          </p>
        </div>

        <p className="text-[#DEE3E7] text-xs mt-8 text-center max-w-[300px] mx-auto">
          By submitting your details you hereby agree to our Terms & Conditions
          and <a href="/privacy">Privacy Policy</a>. You may always opt-out from
          our mailing lists inaccordance with the Privacy Policy.
        </p>
      </div>
    </div>
  );
}

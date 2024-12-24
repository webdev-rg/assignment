import React from "react";
import image from "../../assets/images/image.png";

export const Testimonial = () => {
  return (
    <div className="w-full h-full py-16 lg:px-48 md:px-36 px-5">
      <div>
        <h1 className="text-6xl text-[#170f49] font-semibold">
          Customer Testimonials
        </h1>
        <p className="text-[1.4rem] text-[#33416c] mt-8">
          This tool has transformed my productivity and organization!
        </p>
      </div>
      <div className="w-full h-full mt-8 relative">
        <div className="md:w-1/2 w-full h-[50.9rem] border-[2rem] border-[#ff3e54]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[40.9rem] p-16 bg-white flex items-center justify-between gap-20">
          <div className="w-1/2 flex flex-col gap-8">
            <h1 className="lg:text-[3rem] text-4xl font-semibold text-[#170f49]">
              Using this website has made my tasks so much easier! I can't
              imagine my day without it."
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#ff3e54] relative after:absolute after:content-[''] after:w-24 after:h-1 after:bg-[#33416c] after:left-1/2 after:top-1/2 after:-translate-y-1/2 "></div>
              <div className="ml-20">
                <h1 className="text-2xl text-black font-semibold">
                  Sherri Cronin
                </h1>
                <p className="text-xl text-black font-light">
                  Project Manager, TechCorp
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="w-16 h-16 border border-[#ff3e54] rounded-full">
                <i className="uil uil-angle-left text-4xl text-[#ff3e54]"></i>
              </button>
              <button className="w-16 h-16 border border-[#ff3e54] bg-[#ff3e54] rounded-full">
                <i className="uil uil-angle-right text-4xl text-white"></i>
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-[30.5rem] h-[37rem] pr-6 border border-[#ff3e54] border-l-0 border-t-[2rem] border-r-[2rem] border-b-[2rem] flex items-center justify-center">
              <img src={image} className="w-[30.3rem] h-[30.3rem] object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

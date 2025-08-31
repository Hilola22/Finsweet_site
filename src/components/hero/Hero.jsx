import React from "react";
import hero from "../../assets/hero.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full bg-[#1C1E53]">
      <div className="container mx-auto px-6">
        <section className="flex py-[126px] items-center">
          <div className="w-1/2 pr-10">
            <h1 className="text-[54px] font-bold text-white mb-6 leading-[74px]">
              Building stellar websites for early startups
            </h1>
            <p className="text-[16px] text-gray-300 mb-8 w-[562px] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex flex-row">
              <button className="bg-[#FCD980] mx-2 text-[#1C1E53] w-[230px] h-[64px] rounded-[41px] px-6 py-3 font-medium hover:bg-[#1C1E53] hover:text-[#ffffff] border-[1px] transition duration-300">
                View our work
              </button>

              <button className="flex items-center justify-center gap-[30px] text-white w-[230px] h-[64px] rounded-[41px] px-6 py-3 font-medium hover:bg-[#FCD980] hover:text-[#1C1E53] **:transition duration-300">
                <span>View Pricing</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={hero} alt="Hero image" />
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Hero;

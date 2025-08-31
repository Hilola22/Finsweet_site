import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Work = () => {
  return (
    <section className="w-full bg-[#F4F6FC]">
      <div className="container">
        <div className=" flex py-[96px] px-[274px] text-center flex-col items-center">
          <p className="text-[#282938] text-[16px] font-medium mb-[4px]">
            What we created
          </p>
          <h1 className="text-[48px] font-semibold text-[#282938]">
            Our Work Portfolio
          </h1>
          <p className="text-[16px] font-medium text-[#282938] mt-[24px]">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex gap-[27px] mt-[32px]">
            <Facebook size={16} />
            <Twitter size={16} />
            <Instagram size={16} />
            <Linkedin size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

import React from 'react'
import about_img from "../../assets/about-image.png";
import about_hero from "../../assets/about_hero.jpg";

const About = () => {
  return (
    <section className="container mx-auto px-6">
      <div className="py-20 flex w-full justify-between gap-[47px]">
        <div className="w-[593px] h-[303px]">
          <h4>About us</h4>
          <h2 className="text-[54px] font-bold mb-[30px]">
            Our designs solve problems
          </h2>
          <p className="text-gray-600 w-[484px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="w-[640px] h-[337px] mb-[126px]">
          <img className="object-cover" src={about_img} alt="" />
        </div>
      </div>
      <div>
        <div className="flex py-[96px] px-[80px] bg-[#F4F5F5] gap-[60px]">
          <div className="">
            <h2 className="font-semibold text-[38px] mb-[16px]">
              Goal focussed
            </h2>
            <p className="max-w-lg w-full font-normal test-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="div">
            <h2 className="font-semibold text-[38px] mb-[16px]">
              Continuous improvement
            </h2>
            <p className="max-w-lg w-full font-normal test-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="mb-[20px]">
          <img
            className="w-full h-[340px] object-cover"
            src={about_hero}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About
import {
  ArrowRight,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/home_body.png";
import img2 from "../../assets/home_body_2.png";
import img3 from "../../assets/home_body_3.png";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import profile from "../../assets/profile.png";

const HomeBody = () => {
  return (
    <>
      <section className="w-full bg-white py-[57px]">
        <div className="container">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-[48px] font-semibold">View our projects</h1>
              <p>
                <Link
                  className="flex flex-row items-center gap-2 text-[16px] hover:text-[#363992]"
                  to={"/"}
                >
                  View More <ArrowRight size={18} />
                </Link>
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-6 relative mt-[60px]">
              <div className="col-span-2 row-span-2 bg-gray-200 flex items-center ">
                <img src={img1} alt="" />
                <div className="w-[30%] h-full absolute inset-0 bg-gradient-to-tl from-[#1C1E53] to-[#1C1E536B] flex items-start flex-col ">
                  <h2 className="pt-[312px] pl-[48px] font-semibold text-[24px] text-[#FFFFFF]">
                    Workhub office Webflow Webflow Design
                  </h2>
                  <p className="pt-[20px] pl-[48px] font-[400] text-[17px] leading-[24px] text-[#e9e9e9]">
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam{" "}
                  </p>
                  <button className="flex pl-[48px] pt-[70px] items-center justify-start gap-2.5 text-[#FCD980] text-[16px] font-medium hover:text-[#f7e9ac]">
                    View project <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 flex items-center justify-center relative">
                <img src={img2} alt="" />
                <div className="w-full h-full absolute inset-0 bg-gradient-to-tl from-[#1C1E53] to-[#1C1E536B] flex items-start flex-col ">
                  <h2 className="pt-[140px] pl-[65px] font-semibold text-[25px] text-[#FFFFFF] max-w-[313px]">
                    Unisaas Website Design
                  </h2>
                  <button className="flex pl-[65px] pt-[20px] items-center justify-start gap-2.5 text-[#FCD980] text-[16px] font-medium hover:text-[#f7e9ac]">
                    View portfolio <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="bg-gray-400 flex items-center justify-center">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F4F6FC] py-[57px]">
        <div className="container">
          <div className="text-center">
            <p className="text-[16px] font-medium">Features</p>
            <h2 className="text-[48px] font-semibold w-[530px] m-auto leading-[64px]">
              Design that solves problems, one product at a time
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-[30px] mt-[47px]">
            <div className="w-[405px] h-[316px] bg-white">
              <h3 className="pt-[108px] pl-[48px] text-[24px] font-normal text-[#282938]">
                Uses Client First
              </h3>
              <p className="pt-[12px] pl-[48px] text-[16px] font-normal w-[328px] text-[#464646]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.{" "}
              </p>
            </div>
            <div className="w-[405px] h-[316px] bg-white">
              <h3 className="pt-[108px] pl-[48px] text-[24px] font-normal text-[#282938]">
                Two Free Revision Round
              </h3>
              <p className="pt-[12px] pl-[48px] text-[16px] font-normal w-[328px] text-[#464646]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.{" "}
              </p>
            </div>
            <div className="w-[405px] h-[316px] bg-white">
              <img className="pl-[48px] pt-[48px]" src={icon1} alt="icon 1" />
              <h3 className="pt-[25px] pl-[48px] text-[24px] font-normal text-[#282938]">
                Template Customization
              </h3>
              <p className="pt-[12px] pl-[48px] text-[16px] font-normal w-[328px] text-[#464646]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.{" "}
              </p>
            </div>
            <div className="w-[405px] h-[316px] bg-white">
              <img className="pl-[48px] pt-[48px]" src={icon3} alt="icon 2" />
              <h3 className="pt-[25px] pl-[48px] text-[24px] font-normal text-[#282938]">
                24/7 Support
              </h3>
              <p className="pt-[12px] pl-[48px] text-[16px] font-normal w-[328px] text-[#464646]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.{" "}
              </p>
            </div>
            <div className="w-[405px] h-[316px] bg-white">
              <img className="pl-[48px] pt-[48px]" src={icon2} alt="icon 3" />
              <h3 className="pt-[25px] pl-[48px] text-[24px] font-normal text-[#282938]">
                Quick Delivery
              </h3>
              <p className="pt-[12px] pl-[48px] text-[16px] font-normal w-[328px] text-[#464646]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.{" "}
              </p>
            </div>
            <div className="w-[405px] h-[316px] bg-white">
              <h3 className="pt-[108px] pl-[48px] text-[24px] font-normal text-[#282938]">
                Hands-on approach
              </h3>
              <p className="pt-[12px] pl-[48px] text-[16px] font-normal w-[328px] text-[#464646]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex gap-[110px]">
          <div className="pt-[130px] pb-[192px]">
            <h2 className="text-[38px] font-semibold">
              What our clients say about us
            </h2>
            <p className="mt-[16px] text-[16px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>
          </div>
          <div className="py-[128px] w-[843px]">
            <p className="text-[32px] font-medium">
              "The best agency we've worked with so far. They understand our
              product and are able to add new features with a great focus."
            </p>
            <div className="flex justify-between w-[843px] items-center mt-[48px]">
              <div className="flex gap-2.5">
                <img
                  className="w-[50px] h-[50px] rounded-full object-cover"
                  src={profile}
                  alt="profile img"
                />
                <div>
                  <p className="text-[18px] font-normal">Jenny Wilson</p>
                  <p className="text-[12px] font-normal">Vice President</p>
                </div>
              </div>
              <div className="w-[110px] h-[48px]">
                <button className="text-[grey] hover:text-[#272727]">
                  <CircleChevronLeft size={30} />
                </button>
                <button className="text-[blue] hover:text-[#050565]">
                  <CircleChevronRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBody;

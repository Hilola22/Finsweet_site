import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/home_body.png"
import img2 from "../../assets/home_body_2.png"
import img3 from "../../assets/home_body_3.png"

const HomeBody = () => {
  return (
    <section className="w-full bg-white py-[57px]">
      <div className="container">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[48px] font-semibold">View our projects</h1>
            <p>
              <Link
                className="flex flex-row items-center gap-2 text-[16px]"
                to={"/"}
              >
                View More <ArrowRight size={18} />
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-6 relative">
            <div className="col-span-2 row-span-2 bg-gray-200 flex items-center justify-center">
              <img src={img1} alt="" />
              <div className="w-[30%] h-full absolute inset-0 bg-gradient-to-tl from-[#1C1E53] to-[#1C1E536B] flex items-center justify-center ">
                {/* <h2>Workhub office Webflow Webflow Design</h2>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p> */}
              </div>
            </div>
            <div className="bg-gray-300 flex items-center justify-center">
              <img src={img2} alt="" />
            </div>
            <div className="bg-gray-400 flex items-center justify-center">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBody;

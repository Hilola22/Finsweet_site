import React from "react";
import img from "../../assets/blog.jpg"

const Blog = () => {
  return (
    <section>
      <div className="container ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-[128px] text-[48px] font-semibold w-[800px] text-center mb-[16px]">
            A UX Case Study on Creating a Studious Environment for Students
          </h1>
          <p className="text-[16px] font-medium mb-[32px]">
            Andrew Jonson Posted on 27th January 2021
          </p>
        </div>
        <div>
          <img
            className="w-full h-[447px] object-cover mb-[48px]"
            src={img}
            alt="blog img"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="w-[731px] text-[#282938] text-[16px] text-center mb-[15px]">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <button className="text-[#2405F2] text-[16px] mb-[30px] hover:text-[#2e1ba9]">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from "react";

const Contact = () => {
  return (
    <section className=" py-16 px-6">
      <div className="text-center">
        <h1 className="text-[48px] font-semibold mb-[16px]">Contact Us</h1>
        <p className="w-[562px] m-auto mb-[64px] text-[#00000075]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-[#F4F6FC] p-10 rounded-xl ">
        <form className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium ">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border rounded-[6px] p-3 focus:outline-none "
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md p-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium ">Subject</label>
            <input
              type="text"
              placeholder="Provide context"
              className="border rounded-md p-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium ">Subject</label>
            <select className="border rounded-md p-3 focus:outline-none">
              <option>Select Subject</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium ">Message</label>
            <textarea
              placeholder="Write your question here"
              className="border rounded-md p-3 h-32 resize-none focus:outline-none "
            ></textarea>
          </div>

          <div className="col-span-2 flex mt-4">
            <button className="bg-gray-800 text-white px-16 py-3 rounded-[41px] hover:bg-gray-900 transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

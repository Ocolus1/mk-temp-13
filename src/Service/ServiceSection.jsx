import React from "react";
import star from "../assets/tv.svg";
import chat from "../assets/chat.svg";
import clock from "../assets/board.svg";

const serviceData = [
  {
    title: "Web-Design",
    price: "$200",
    description: "Work involved in developing a website for the Internet (World Wide Web)",
    classes: "40 classes",
    timespan: "3 months"
  },
  {
    title: "Web-Development",
    price: "$200",
    description: "Conversations with teachers or another students about tasks",
    classes: "40 classes",
    timespan: "3 months"
  },
  {
    title: "UI/UX Design",
    price: "$200",
    description: "We give every of our students task for gathering knowledge at home",
    classes: "40 classes",
    timespan: "3 months"
  },
];

function ServiceSection() {
  return (
    <section className="feature__section bg-[#F4F4F7]">
      <div className=" max-w-5xl px-7 lg:px-10 py-14 mx-auto ">
        <div className="flex flex-col gap-y-3">
          <p className="text-sm text-[#1EBFC1]">
            COURSES
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-zinc-800">
            Popular Courses
          </h2>
          <p className="md:max-w-lg">Check out our most popular courses that suit for you, here you can find your favourite one.</p>
        </div>
        <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceData.map(({ title, description, price, classes, timespan }) => (
            <div
              key={title}
              className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer"
            >
              <div className="flex flex-col gap-y-2.5">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-xl font-semibold">{price}</p>
              </div>
              <p className="text-slate-700/70 text-base">{description}</p>
              <div className="flex items-center justify-between pt-5 w-full">
                <p className="bg-[#E0F7F6] px-2 py-0.5 text-sm rounded border border-cyan-500">{classes}</p>
                <p className="bg-gray-200 px-2 py-0.5 text-sm rounded border border-gray-300">{timespan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}

export default ServiceSection;


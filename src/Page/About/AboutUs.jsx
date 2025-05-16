import React from "react";
import BannerImg from "../../assets/banner-2.png";
import { GoDot } from "react-icons/go";
import BgImg from "../../assets/bg.png"
import OurTeam from "../Home/OurTeam";



const AboutUs = () => {
  return (
    <div>
      <div className="">
        <div
          className="relative py-20 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BannerImg})` }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/70 to-gray-300/70"></div>

          {/* Content on top of gradient */}
          <div className="relative z-10 text-white container mx-auto px-12">
            <h1 className="text-6xl font-bold text-yellow-400 md:text-left text-center">
              About Us
            </h1>
            <p className="mt-4 text-lg md:w-xl text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
        <div className="container mx-auto px-12 space-y-3 py-12">
          <h2 className="text-4xl font-bold uppercase ">
            Plumber Points Company
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen+ book. Lorem Ipsum is
            simply
          </p>
          <p>
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 space-y-6 px-12 gap-7">
          <div>
            <div className="flex gap-1 items-center">
              <GoDot className="size-5 text-[#DD3142]" />
              <h2>Residental Service</h2>
            </div>
            <p className="pl-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <GoDot className="size-5 text-[#DD3142]" />
              <h2>Residental Service</h2>
            </div>
            <p className="pl-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <GoDot className="size-5 text-[#DD3142]" />
              <h2>Residental Service</h2>
            </div>
            <p className="pl-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <GoDot className="size-5 text-[#DD3142]" />
              <h2>Residental Service</h2>
            </div>
            <p className="pl-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <GoDot className="size-5 text-[#DD3142]" />
              <h2>Residental Service</h2>
            </div>
            <p className="pl-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <GoDot className="size-5 text-[#DD3142]" />
              <h2>Residental Service</h2>
            </div>
            <p className="pl-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
        <div className="relative w-full bg-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
            {/* Image on the left */}
            <div className="relative md:-mr-20 z-10 md:w-1/3">
              <img
                src={BgImg}
                alt="Service"
                className="rounded-lg w-full  h-auto shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="bg-[#DD3142] text-white p-8 md:w-2/3 w-full space-y-4  z-0 py-30 pl-30">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Service
              </h2>
              <p className="text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <OurTeam/>
        <Testimonial/>
        <Blog/>

      </div>
    </div>
  );
};

export default AboutUs;

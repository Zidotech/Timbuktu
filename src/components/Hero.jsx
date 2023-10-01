import React from "react";
import { image } from "../constants";
import { BiLogoDiscordAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="hero__bg">
      <div className="absolute top-[10%] md:top-[15%]  w-full ">
        <div className="flex justify-between items-center section pt-10">
          <div className="text-white text-left  flex-1">
            <div className="  flex flex-col gap-y-4 md:gap-y-8 justify-center md:items-start items-center w-full   ">
              <h3 className="md:text-[48px] text-[38px] font-bold text-white md:leading-[65px] leading-[45px]">
                Web3 Education & Sustainable Development In{" "}
                <span className="green">Africa</span>
              </h3>
              <p className=" sm:text-[23px] text-[20px] text-focus-in ">
                Timbuktu DAO is on a mission to drive Africa’s transformation
                through Web3 technical education, collaborative innovation and
                fostering decentralized tools for sustainable development.
              </p>

              {/* <button className=" bg-White text-black  rounded-full font-bold flex gap-x-4 items-center">
                <img
                  src={image.discord_logo}
                  alt=""
                  className="w-[100px] border-2 border-red-600"
                />{" "}
                Join Discord
              </button> */}

              <div className=" bg-White text-black py-[15px] px-[20px] rounded-2xl font-bold flex gap-x-4 items-center">
                <BiLogoDiscordAlt className="text-[25px] " />
                <a>Join Discord</a>
              </div>
            </div>
          </div>

          <div className="md:block hidden">
            <img src={image.hero_img} alt="" className="w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { RxDiscordLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero__bg">
      <div className="absolute top-[10%] md:top-[15%]  w-full ">
        <div className="flex justify-between items-center section pt-10 ">
          <div className="text-white sm:w-[60%] w-full mx-auto pt-4 ">
            <div className="flex flex-col gap-y-5 md:gap-y-[50px] text-center justify-center  items-center w-full   ">
              <h3 className="md:text-[48px] text-[38px] font-bold text-white md:leading-[65px] leading-[45px]">
                Web3 Education & Sustainable Development In{" "}
                <span className=" text-Primary">Africa</span>
              </h3>
              <p className=" text-[20px] text-focus-in ">
                Timbuktu DAO is on a mission to drive Africa’s transformation
                through Web3 technical education, collaborative innovation and
                fostering decentralized tools for sustainable development.
              </p>

              <Link
                target="_blank"
                to={"https://t.me/timbuktuD"}
                className=" bg-Secondary text-black py-[18px] px-[40px] rounded-2xl font-bold flex gap-x-4 items-center"
              >
                <RxDiscordLogo />
                <a>Join Discord</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

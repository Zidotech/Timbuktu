import { Link } from "react-router-dom";
import { TeamCard, image } from "../constants";

const OurTeam = () => {
  return (
    <section>
      <div className="relative sm:h-[40vh] h-[45vh]">
        <div className="absolute top-[20%]   w-full ">
          <div className="flex justify-between items-center section pt-10 ">
            <div className="text-white sm:w-[58%] w-full mx-auto pt-4 ">
              <div className="flex flex-col gap-y-3 text-center justify-center  items-center w-full   ">
                <h3 className="md:text-[48px] text-[38px] font-bold text-white md:leading-[65px] leading-[45px]">
                  Get To Know &nbsp;
                  <span className=" text-Primary">Our Team</span>
                </h3>
                <p className="text-[16px] font-bold">
                  Just take a look - each member of the team is contributing to
                  the vission and mission of TimbuktuDAO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="flex justify-between  flex-wrap gap-y-10 gap-x-1">
          {TeamCard.map((card) => (
            <div
              key={card.id}
              className="text-black border-2 border-Primary rounded-t-lg sm:w-[323px]  w-[90%] mx-auto sm:mx-0 pt-8 flex flex-col  items-center justify-between bg-Tertiary h-[400px]"
            >
              <img src={card.img} alt="" className="w-[200px] rounded-full" />
              <div className="text-center">
                <p className="font-medium text-[20px]">{card.name}</p>
                <span className="font-medium">{card.role}</span>
              </div>

              <div className="flex gap-x-5 bg-Primary w-full justify-center py-3">
                <Link target="_blank" to={card.linkedin}>
                  <img
                    src={image.linkdIn}
                    alt="Linkedin"
                    className="w-[30px]"
                  />
                </Link>
                <Link target="_blank" to={card.x}>
                  <img src={image.twitter} alt="X" className="w-[30px]" />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

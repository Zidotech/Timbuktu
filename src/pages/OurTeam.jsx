import { Link } from "react-router-dom";
import { TeamCard } from "../constants";

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
              className="text-black border-2 border-Primary rounded-t-lg sm:w-[323px]  w-[90%] mx-auto sm:mx-0 pt-8 flex flex-col items-center justify-between bg-Tertiary h-[400px]"
            >
              <img src={card.img} alt="" className="w-[200px] rounded-full" />
              <div className="text-center">
                <p className="font-medium text-[20px]">{card.name}</p>
                <span className="font-medium">{card.role}</span>
              </div>

              <div className="flex gap-x-5 bg-Primary w-full justify-center py-3">
                <Link target="_blank" to={card.linkedin}>
                  <img
                    src={card.linkedin_icon}
                    alt="Linkedin"
                    className={`w-[30px] ${
                      card.linkedin_icon === undefined ? "hidden" : ""
                    }`}
                  />
                </Link>
                <Link target="_blank" to={card.x}>
                  <img
                    src={card.x_icon}
                    alt="X"
                    className={`w-[30px] ${
                      card.x_icon === undefined ? "hidden" : ""
                    }`}
                  />{" "}
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

import { Link } from "react-router-dom";
import { TeamCard, image } from "../constants";

const OurTeam = () => {
  return (
    <section>
      <div className="relative sm:h-[57vh] h-[40vh]">
        <div className="absolute top-[20%] md:top-[15%]  w-full ">
          <div className="flex justify-between items-center section pt-10 ">
            <div className="text-white sm:w-[54%] w-full mx-auto pt-4 ">
              <div className="flex flex-col gap-y-5 md:gap-y-[50px] text-center justify-center  items-center w-full   ">
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
        <div className="flex justify-between  flex-wrap gap-y-16 gap-x-3">
          {TeamCard.map((card) => (
            <div
              key={card.id}
              className="text-black border-2 border-Primary rounded-t-lg sm:w-[30%] w-[90%] mx-auto sm:mx-0 pt-8 flex flex-col gap-y-5 items-center justify-center bg-Tertiary"
            >
              <img src={card.img} alt="" />
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

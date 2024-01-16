/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { RoadMap, image } from "../constants";

const Values = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="section">
        <div className="pt-10">
          <h3 className="sm:text-[48px] text-[35px] font-bold text-center text-Primary">
            Our values
          </h3>

          <div className="py-5">
            <div className="md:w-[40%] mx-auto text-center w-[98%]">
              <h1 className="text-[20px] font-bold">Inclusivity:</h1>
              <p className="text-[16px] font-medium">
                {" "}
                We celebrate diversity and promote an environment where
                individuals from diverse backgrounds can collaborate and
                contribute effectively
              </p>
            </div>

            <div className="flex md:mt-12 md:flex-row flex-col">
              <div className="flex flex-col justify-between md:py-5 py-3 md:pr-4 md:gap-y-0 gap-y-3">
                <div className="md:text-right text-center ">
                  <h1 className="text-[20px] font-bold"> Empowerment:</h1>
                  <p className="text-[16px] font-medium">
                    {" "}
                    We believe in the power of knowledge. We aim to equip
                    Africans with the technical skills needed to actively
                    participate in the Web3 revolution and contribute to the
                    continent's development.
                  </p>
                </div>
                <div className=" md:text-right text-center">
                  <h1 className="text-[20px] font-bold"> Collaboration:</h1>
                  <p className="text-[16px] font-medium">
                    {" "}
                    We believe that outstanding achievements are born from
                    collective efforts. We foster a culture of collaboration
                    that fuels our progress.
                  </p>
                </div>
              </div>

              <div className="md:block hidden h-[380px] w-[700px]">
                <img src={image.shape_pentagon} alt="" className="h-[80%]" />
              </div>

              <div className="flex flex-col justify-between md:pt-6  pb-9 md:pl-3 md:gap-y-0 gap-y-3">
                <div className="md:text-left text-center">
                  <h1 className="text-[20px] font-bold"> Innovation:</h1>
                  <p className="text-[16px] font-medium">
                    {" "}
                    Embracing cutting-edge technology and creative thinking is
                    fundamental to our ethos. We encourage innovative approaches
                    to solving Africa's challenges.
                  </p>
                </div>
                <div className="md:text-left text-center">
                  <h1 className="text-[20px] font-bold">Openness:</h1>
                  <p className="text-[16px] font-medium">
                    {" "}
                    Transparency and knowledge-sharing guide our actions. We're
                    committed to sharing insights, resources, and opportunities
                    within our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mission and goals section */}
        <div className="flex justify-between md:flex-row flex-col md:gap-y-0 gap-y-6 sm:mt-[150px] mt-[50px]">
          {/* left box */}
          <div className=" md:w-[43%] w-[100%] h-min pt-3 pb-7 md:px-7 px-4">
            <div className=" border-l-2 border-Primary md:px-7 px-3  flex flex-col gap-y-4">
              <h3 className="sm:text-[48px] text-[30px] font-bold leading-[65px]">
                Our Mission
              </h3>
              <div>
                <p className="text-[20px] font-bold leading-[27px] mb-4">
                  Building a Decentralized Future for Africa
                </p>
                <span className="text-[16px] font-medium leading-[22px] ">
                  We are committed to advancing Web3 technical education across
                  Africa, enabling individuals to harness blockchain technology
                  for sustainable development. Our mission is rooted in the
                  vision of Timbuktu as a center of learning and
                  intellectualism, bringing that spirit into the modern era.
                </span>
              </div>

              <button className=" py-[19px] px-[41px] bg-transparent rounded-2xl text-Secondary font-bold w-max border border-Secondary mt-3">
                Become a member
              </button>
            </div>
          </div>

          {/* right box */}
          <div className="md:w-[40%] w-[100%]  h-min pt-3 pb-7 md:px-7 px-4">
            <div className="border-l-2 border-Primary md:px-7 px-3  flex flex-col gap-y-5">
              <h3 className="sm:text-[48px] text-[30px] font-bold leading-[65px]">
                Our Goals
              </h3>
              <div>
                <p className="text-[20px] font-bold leading-[27px] mb-5">
                  {" "}
                  Web3 Education Advancement:
                </p>
                <span className="text-[16px] font-medium leading-[22px] ">
                  We aim to bridge the knowledge gap by providing accessible and
                  comprehensive Web3 education through workshops, bootcamps,
                  hackathons, and online resources.
                </span>
              </div>
              <div>
                <p className="text-[20px] font-bold leading-[27px] mb-5">
                  Sustainable Solutions Development:
                </p>
                <span className="text-[16px] font-medium leading-[22px] ">
                  We strive to create a community of builders, innovators, and
                  problem-solvers who collaborate to develop decentralized tools
                  that address Africa's socio-economic challenges.
                </span>
              </div>
              <div>
                <p className="text-[20px] font-bold leading-[27px] mb-5">
                  {" "}
                  Network State Establishment:
                </p>
                <span className="text-[16px] font-medium leading-[22px] ">
                  Our long-term vision involves creating a Network State City
                  serving as a physical and virtual hub for learning,
                  innovation, and cross-cultural exchange within the Web3
                  ecosystem.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* our partners */}
        {/* <div className="mt-10">
          <h3 className="text-[48px] font-bold text-center">Our Partners</h3>

          <div className="flex flex-wrap justify-between md:w-[80%] w-[100%] mx-auto pt-8">
            <p className="text-[32px] font-medium">Blockchain Africa</p>
            <p className="text-[32px] font-medium">ETHCameroon</p>
            <p className="text-[32px] font-medium">ETHCameroon</p>
          </div>

          <div className="flex justify-between md:w-[80%] w-full mx-auto py-10">
            <h4 className="md:text-[20px] text-[23px] font-medium text-center">
              Join us on our journey to empower Africa with the knowledge,
              skills, and tools needed for a decentralized and sustainable
              future.
            </h4>
          </div>
        </div> */}

        {/* ROADMAP 2024 */}
        <div className=" sm:mt-[150px] mt-[50px]">
          <h2 className="text-center sm:text-[48px] text-[27px] font-bold">
            Road Map 2024
          </h2>

          <div className="pb-16 pt-24 px-2  sm:mt-[50px] mt-[20px]">
            <div className="flex justify-center flex-wrap sm:gap-7 gap-14">
              {RoadMap.map((card, index) => (
                <div
                  key={card.id}
                  className="bg-Primary relative px-4 sm:w-[20%] w-full rounded-2xl text-center py-16"
                >
                  <div className="clip-path bg-Secondary absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-9 px-12 text-center text-white border-4 border-Secondary rounded-3xl">
                    <h3 className="text-[32px]">{card.quarter}</h3>
                  </div>
                  <ul className="text-black">
                    {card.items.map((item, index) => (
                      <li
                        key={item.id}
                        className={`text-[18px] font-Manrope font-medium ${
                          index === card.items.length - 1
                            ? ""
                            : "mb-3 border-b-4 pb-3 border-dashed border-BorderB"
                        }`}
                      >
                        {item.plan}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

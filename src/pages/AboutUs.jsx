import { Link } from "react-router-dom";
import { image } from "../constants";

const AboutUs = () => {
  return (
    <section>
      <div className="relative sm:h-[88vh] h-[82vh]">
        <div className="absolute top-[10%] md:top-[13%]  w-full ">
          <div className="flex justify-between items-center section pt-10 ">
            <div className="text-white sm:w-[54%] w-full mx-auto pt-4 ">
              <div className="flex flex-col gap-y-5 md:gap-y-[50px] text-center justify-center  items-center w-full   ">
                <h3 className="md:text-[48px] text-[38px] font-bold text-white md:leading-[65px] leading-[45px]">
                  About
                  <span className=" text-Primary">Us</span>
                </h3>
                <p className=" text-[20px] text-focus-in ">
                  Timbuktu DAO is a decentralized autonomous organization built
                  on the principles of community, innovation, and decentralized
                  governance.We are on a mission to create a vibrant and
                  inclusive ecosystem where every voice matters and contributes
                  to the collective growth and success of our community
                </p>

                <Link className=" bg-Secondary text-black py-[18px] px-[40px] rounded-2xl font-bold flex gap-x-4 items-center">
                  <a>Join Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[10vh] sm:h-[60px] w-full">
        <img
          src={image.about_img}
          alt="about_img"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="section text-white flex flex-col gap-y-16 ">
        <div className="mt-10">
          <h3 className="text-[48px]">Our Vision</h3>

          <p className="text-[20px] font-medium mt-6">
            Our clear-cut vision is to equip Africans with the technical skills
            required to thrive in the Web3 revolution. As Web3 technology
            becomes an indispensable element of global progress, Africa must not
            just catch up but lead. Our vision is a decentralized Africa where
            communities leverage blockchain technology to address real-world
            challenges and unlock new opportunities
          </p>
        </div>

        <div>
          <h3 className="text-[48px]">What We Do</h3>

          <p className="text-[20px] font-medium mt-9">
            Timbuktu DAO is a visionary initiative that draws inspiration from
            the ancient African city of Timbuktu, renowned for its learning,
            knowledge, economic prosperity, and enlightenment legacy. In the
            context of the ongoing Web 3.0 adoption movement in Africa, the need
            for technically skilled individuals to construct decentralized
            solutions for sustainable development is more pronounced than ever.
          </p>
          <p className="text-[20px] font-medium mt-6">
            Timbuktu DAO is an inclusive community comprising Builders,
            learners, Thinkers, Entrepreneurs, Developers, Designers, creatives,
            creators, Educators, Activists, and Analysts. Our primary focus is
            furnishing Web3 Technical Education and cultivating opportunities to
            create decentralized tools to address Africa's manifold challenges.
          </p>
          <p className="text-[20px] font-medium mt-6">
            The ultimate aspiration is to build a Network State City within
            Africa as an innovation hub for teaching, learning, investing, and
            building with blockchain technology. Our overarching mission is to
            lay the foundation for a decentralized future in Africa.
          </p>
        </div>

        <div className="sm:text-center flex flex-col gap-y-8 items-center">
          <img src={image.our_vision} alt="our_vision" />
          <p className="text-[20px] font-medium">
            Become a part of Timbuktu DAO and contribute to a community that
            values your voice and insights. Whether you're an experienced
            developer, a blockchain enthusiast, or someone looking to engage
            with a passionate community, we invite you to join us in shaping the
            future of decentralized governance.
          </p>

          <div className="flex gap-x-10">
            <Link className="  py-[19px] px-[41px] bg-transparent rounded-2xl text-Secondary font-bold w-max border border-Secondary ">
              <a>Support Us</a>
            </Link>
            <Link className=" bg-Secondary text-black py-[18px] px-[40px] rounded-2xl font-bold w-max">
              <a>Join Us</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Links, image } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  // scroll effect
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 25);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-20   ${
        active ? " bg-black" : ""
      }`}
    >
      <div className="section">
        <div
          className={` md:px-0 px-2 py-5 flex justify-between items-center  w-full ${
            active ? "" : ""
          }`}
        >
          {/* Nav links */}

          {/* logo */}

          <Link to={"/"}>
            <img src={image.logo} alt="company_logo" />
          </Link>

          {/* links */}

          <nav className=" md:flex hidden ">
            {Links.map((link, index) => (
              <Link
                to={link.url}
                target={link.target}
                key={index}
                className={`font-bold text-[20px] text-White ${
                  index === Links.length - 1 ? "mr-0" : "md:mr-8 mr-0"
                } ${active === link.url ? "active" : ""} hover:text-Primary`}
                onClick={() => setActive(link.url)}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* contact btn */}
          <div className="md:flex hidden">
            <Link target="_blank" to={"mailto:info@timbuktudao.xyz"}>
              <button className=" bg-White text-black py-[15px] px-[34px] rounded-full font-bold hover:bg-transparent hover:text-White hover:border-4 hover:border-Primary">
                Contact Us
              </button>
            </Link>
          </div>

          {/* mobile nav */}
          <div className="lg:hidden flex">
            <HiMenuAlt3
              alt="menu-icon"
              className={`w-[33px]  h-[38px] object-contain text-White`}
              onClick={() => setToggle((prev) => !prev)}
            />

            {toggle && (
              <div
                className={`${
                  toggle ? "block" : "hidden"
                } bg-black text-White z-50 absolute top-0 left-0 right-0 w-full py-5 px-5`}
              >
                <div className="flex justify-between items-center">
                  <div className="">
                    <img src={image.logo} alt="" className="" />
                  </div>
                  <AiOutlineClose
                    fontSize={27}
                    className="overlay__close"
                    onClick={() => setToggle(false)}
                  />
                </div>
                <ul className="py-5">
                  <li className="mb-3">
                    <Link
                      to={"/about-us"}
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-bold text-[20px] "
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      target="_blank"
                      to={"https://timbuktudao.medium.com/"}
                      className="font-bold text-[20px] "
                    >
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to={"/our-team"}
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-bold text-[20px] "
                    >
                      Our Team
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      target="_blank"
                      to={"https://timbuktu-dao.gitbook.io/timbuktu-dao"}
                      className="font-bold text-[20px] "
                    >
                      Scroll{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setToggle((prev) => !prev)}
                      to={"/timbuktu-city"}
                      className="font-bold text-[20px] "
                    >
                      Timbuktu City{" "}
                    </Link>
                  </li>
                </ul>

                <div className="w-full flex justify-center pb-3">
                  <Link
                    target="_blank"
                    to={"mailto:info@timbuktudao.xyz"}
                    className="w-1/2"
                  >
                    <button className=" bg-white text-black py-[15px] sm:px-[34px] rounded-full font-bold w-full">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

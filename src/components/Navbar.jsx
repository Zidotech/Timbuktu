import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { image } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  // scroll effect
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
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
          <div className="">
            <img src={image.logo} alt="company_logo" />
          </div>

          {/* links */}
          <div>
            <div className=" md:flex hidden">
              {/* {links.map((nav) => {
                <li key={nav.id}>
                  <a href={nav.url}>{nav.text}</a>
                </li>;
              })} */}

              <Link to={"/"} className="font-bold text-[20px] text-White mr-8">
                Home{" "}
              </Link>

              <Link
                target="_blank"
                to={"https://medium.com/@info_42723"}
                className="font-bold text-[20px] text-White mr-8"
              >
                Blog{" "}
              </Link>

              <Link
                to={"/about-us"}
                className="font-bold text-[20px] text-White mr-8"
              >
                About Us{" "}
              </Link>

              <Link
                target="_blank"
                to={"https://timbuktu-dao.gitbook.io/timbuktu-dao"}
                className="font-bold text-[20px] text-White mr-8"
              >
                Whitepaper{" "}
              </Link>

              <Link
                to={"/timbuktu-city"}
                className="font-bold text-[20px] text-White"
              >
                Timbuktu City{" "}
              </Link>
            </div>
          </div>

          {/* contact btn */}
          <div className="md:flex hidden">
            <button className=" bg-White text-black py-[15px] px-[34px] rounded-full font-bold">
              Contact Us
            </button>
          </div>

          {/* mobile nav */}
          <div className="lg:hidden flex">
            {toggle ? (
              <AiOutlineClose
                alt="menu-icon"
                className={`w-[33px]  h-[38px] object-contain text-White`}
                onClick={() => setToggle(false)}
              />
            ) : (
              <HiMenuAlt3
                alt="menu-icon"
                className={`w-[33px]  h-[38px] object-contain text-White`}
                onClick={() => setToggle((prev) => !prev)}
              />
            )}

            {toggle && (
              <div
                className={`${
                  toggle ? "block" : "hidden"
                } bg-white z-50 absolute top-[70px] left-0 right-0 w-full`}
              >
                <ul className=" py-3 px-4">
                  <li className="mb-3">
                    <Link
                      to={"/"}
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-bold text-[20px] text-black"
                    >
                      Home{" "}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      target="_blank"
                      to={"https://medium.com/@info_42723"}
                      className="font-bold text-[20px] text-black"
                    >
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to={"/about-us"}
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-bold text-[20px] text-black"
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      target="_blank"
                      to={"https://timbuktu-dao.gitbook.io/timbuktu-dao"}
                      className="font-bold text-[20px] text-black"
                    >
                      Whitepaper{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setToggle((prev) => !prev)}
                      to={"/timbuktu-city"}
                      className="font-bold text-[20px] text-black"
                    >
                      Timbuktu City{" "}
                    </Link>
                  </li>
                </ul>

                <div className="w-full flex justify-center pb-3">
                  <button className=" bg-black text-white py-[15px] px-[34px] rounded-full font-bold w-[90%]">
                    Contact Us
                  </button>
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

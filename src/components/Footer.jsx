import React from "react";
import { image } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full bg-black text-white border-t border-Border mt-24">
      <div className="py-10 section">
        <div className="w-full flex justify-between md:flex-row flex-col md:gap-y-0 gap-y-7 ">
          <div className="">
            <h2 className="text-White font-bold text-[20px]">Timbuktu DAO</h2>
          </div>

          <div className="flex md:flex-row flex-col gap-10">
            <div>
              <h3 className="text-[20px] font-bold">Quick Link</h3>
              <ul className="pt-4">
                <li className="mb-3">
                  <Link className="font-bold text-[16px] text-White">
                    Home{" "}
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="font-bold text-[16px] text-White">
                    Blog{" "}
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="font-bold text-[16px] text-White">
                    About Us{" "}
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="font-bold text-[16px] text-White">
                    Whitepaper{" "}
                  </Link>
                </li>
                <li>
                  <Link className="font-bold text-[16px] text-White">
                    Timbuktu City{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-bold">Socials</h3>
              <div className="flex gap-7 pt-4">
                <Link>
                  <img src={image.discord} alt="" className="w-[34px]" />
                </Link>
                <Link target="_blank" to={"https://t.me/timbuktuD"}>
                  <img src={image.telegram} alt="" className="w-[34px]" />
                </Link>
                <Link target="_blank" to={"https://x.com/timbuktudao/"}>
                  <img src={image.twitter} alt="" className="w-[34px]" />
                </Link>
                <Link
                  target="_blank"
                  to={
                    "https://www.linkedin.com/company/timbkutudao/?viewAsMember=true"
                  }
                >
                  <img src={image.linkdIn} alt="" className="w-[34px]" />
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/profile.php?id=61551929610914"}
                >
                  <img src={image.facebook} alt="" className="w-[34px]" />
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.instagram.com/timbuktudao/"}
                >
                  <img src={image.instagram} alt="" className="w-[34px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

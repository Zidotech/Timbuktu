import React from "react";
import { image } from "../constants";

const Footer = () => {
  return (
    <section className="w-full bg-black text-white border-t border-Border">
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
                  <a className="font-bold text-[16px] text-White">Home </a>
                </li>
                <li className="mb-3">
                  <a className="font-bold text-[16px] text-White">Blog </a>
                </li>
                <li className="mb-3">
                  <a className="font-bold text-[16px] text-White">About Us </a>
                </li>
                <li className="mb-3">
                  <a className="font-bold text-[16px] text-White">
                    Whitepaper{" "}
                  </a>
                </li>
                <li>
                  <a className="font-bold text-[16px] text-White">
                    Timbuktu City{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-bold">Socials</h3>
              <div className="flex gap-7 pt-4">
                <img src={image.discord} alt="" className="w-[50px]" />
                <img src={image.telegram} alt="" className="w-[50px]" />
                <img src={image.twitter} alt="" className="w-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

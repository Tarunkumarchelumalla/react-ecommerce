import React from "react";

function Footer() {
  return (
    <div className="w-full mt-[40px] bg-[#2A2A2A] rounded shadow-current shadow-xl">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 text-cyan-500 px-10 py-2">
        <div>
          <ul className="">
            <p className="text-2xl border-b-4 border- white inline"> Socials</p>
            <li className="py-2">Insta</li>
            <li className="py-2">Facebook</li>
            <li className="py-2">LinkedIn</li>
            <li className="py-2">Behance</li>
          </ul>
        </div>
        <div>
          <ul className="">
            <p className="text-2xl border-b-4 border- white inline">Products</p>
            <li className="py-2">Sell</li>
            <li className="py-2">Cups</li>
            <li className="py-2">read</li>
            <li className="py-2">watch</li>
          </ul>
        </div>
        <div>
          <ul className="">
            <p className="text-2xl border-b-4 border- white inline">
              Community
            </p>
            <li className="py-2">collab</li>
            <li className="py-2">version </li>
            <li className="py-2">malfunction</li>
            <li className="py-2">Dribble</li>
          </ul>
        </div>
        <div>
          <ul className="">
            <p className="text-2xl border-b-4 border- white inline">Services</p>
            <li className="py-2">fast</li>
            <li className="py-2">Sloe </li>
            <li className="py-2">6 day</li>
            <li className="py-2">Secore</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

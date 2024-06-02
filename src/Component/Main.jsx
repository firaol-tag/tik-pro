import React from "react";
import { Link } from "react-router-dom";
import video from "./../asset/yenev.mp4";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <div className="head py-2 flex bg-white font-bold opacity-40 justify-around absolute">
        <h1 className="font-bold text-2xl ">LOLE</h1>
        <ul className="grid grid-cols-4 gap-2 font-bold">
          <li className="text-xl">
            <Link>Home</Link>
          </li>
          <li className="text-xl">
            <Link>Order</Link>
          </li>
          <li className="text-xl">
            <Link>Service</Link>
          </li>
          <li className="text-xl">
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <section className="sec relative ">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="screen w-screen absolute"
        />
        <h1 className="font-bold text-4xl">Wellcome To Lole Delivery</h1>
        <button className="bg-black opacity-40 px-8 py-2 mt-4 font-bold text-xl rounded rounde-fuliy ">
          Order Now
        </button>
      </section>
    </div>
  );
};

export default Main;

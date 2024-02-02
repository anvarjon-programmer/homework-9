import React from 'react';
import cosmasImg from '../assets/cosmas/cosmas.png';

export default function Cosmos() {
  return (
    <div className="containerHero">
      <div className="comos">
        <div className="cosmoWarper">
          <div className="CosImg">
            <img src={cosmasImg} alt="" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="cosmoText max-w-[350px]">
            <h2 className="join text-3xl font-semibold text-white">Join our weekly digest</h2>
            <p className="update text-base font-semibold text-white mt-3">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <form className="mt-3">
              <input
                type="text"
                placeholder="Enter your email here"
                className="w-full h-12 px-4 border-none bg-white rounded-2xl"
              />
              <button className="subcribe bg-purple-500 text-white w-full h-12 rounded-2xl mt-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

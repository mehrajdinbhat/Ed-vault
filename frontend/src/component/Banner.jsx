import React from "react";
import img from "../../public/img.png";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2">
          <div className="space-y-12 mt-12 md:mt-32">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome! Let’s explore and learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Discover the joy of reading with us! Our bookstore brings 
              together stories for every mood, passion, and purpose.
               Whether you love diving into adventures, exploring history, 
               or seeking knowledge, we’ve got something special for you. 
               Reading is not just a habit—it’s a journey, and we’re excited 
               to walk this path with you.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={img}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
export default Banner;

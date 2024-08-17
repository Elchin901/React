import { Link } from "react-router-dom";

import { getImageUrl } from "../../utils";

export const Work = () => {
  return (
    <div className="py-5">
      <h2 className="color2 py-2 poppins-medium">My projects</h2>

      {/* <div className=" relative  py-10 ">       
        <div className="w-full  mx-auto h-auto overflow-hidden rounded-lg ">
          <img
            src={getImageUrl("img/web10.png")}
            alt="image"
            className="w-full h-auto  rounded-lg transition-all scale-120 duration-300 hover:scale-95"
          ></img>
        </div>

        <div className=" absolute  text-white flex items-center justify-evenly opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100  ">
          <div className="">
            <a href="#">Demo</a>
          </div>
          <div>
            <a href="#">Github</a>
          </div>
        </div>
      </div> */}
      <div className="relative py-10 group">
        <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
          <img
            src={getImageUrl("img/web10.png")}
            alt="image"
            className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-95 group-hover:opacity-50 border-2 border-[#AA14F0]"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <div className="text-white flex gap-14">
            <a
              href="https://getir-henna.vercel.app/"
              className="text-lg font-bold poppins-medium "
            >
              Demo
            </a>
            <a
              href="https://github.com/Elchin901/React/tree/main/project3"
              className="text-lg font-bold poppins-medium"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="relative py-10 group">
        <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
          <img
            src={getImageUrl("img/web14.png")}
            alt="image"
            className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-95 group-hover:opacity-50 border-2 border-[#AA14F0]"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <div className="text-white flex gap-14">
            <a
              href="https://blummio.netlify.app/"
              className="text-lg font-bold poppins-medium  "
            >
              Demo
            </a>
            <a
              href="https://github.com/Elchin901/projectBlum"
              className="text-lg font-bold poppins-medium"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="relative py-10 group">
        <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
          <img
            src={getImageUrl("img/web15.png")}
            alt="image"
            className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-95 group-hover:opacity-50 border-2 border-[#AA14F0]"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <div className="text-white flex gap-14">
            <a
              href="https://elchin901.github.io/web2/Flowie.html#"
              className="text-lg font-bold poppins-medium "
            >
              Demo
            </a>
            <a
              href="https://github.com/Elchin901/Elchin901.github.io/tree/main/web2"
              className="text-lg font-bold poppins-medium"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      {/* <div className="flex py-10">
        <img src={getImageUrl("img/web14.png")} className=" object-fill"></img>
        <div className="px-3">
          <h4 className="color2 poppins-regular">
            <a href="https://blummio.netlify.app/"></a>
          </h4>
        </div>
      </div>

      <div className="flex py-10">
        <img
          src={getImageUrl("img/web3.png")}
          className="h-32 w-56 object-fill"
        ></img>
        <div className="px-3">
          <h4 className="color2 poppins-regular">
            <a href="https://elchin901.github.io/web3/Portland.html">Phones</a>
          </h4>
          <p className="color3 text-[12px] poppins-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            corporis ipsa, repellat odio,res exercitationem dolore praesentium
            deserunt?
          </p>
        </div>
      </div> */}

      <div className="flex justify-center py-5 ">
        <Link to="/More">
          <button className="bg-violet-600 hover:bg-white text-white hover:text-violet-900 poppins-medium py-2 px-7 rounded-full transition-colors duration-500 ease-in-out">
            More
          </button>
        </Link>
      </div>
    </div>
  );
};

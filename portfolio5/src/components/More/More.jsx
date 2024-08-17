import { getImageUrl } from "../../utils";
export const More = () => {
  return (
    <div className="text-white">
      <div className="container  mx-auto py-12">
        <h2 className=" poppins-medium mx-5 pb-20 color2">My projects</h2>
        <div className="grid  md:grid-cols-3 gap-12 px-4  sm:grid-cols-2  min-[320px]:grid-cols-1">
          <div className="">
            <img src={getImageUrl("img/web11.png")} className="rounded" alt="Louvre"/>
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                <a href="https://github.com/Elchin901/React/tree/master/portfolio4">Github</a>
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://portfolio4tutorial.netlify.app/">Demo</a>
              </button>
            </div>
          </div>
          <div className="">
            <img src={getImageUrl("img/web12.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                Github
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://snapfrontendmentor.netlify.app/">Demo</a>
              </button>
            </div>
          </div>
          <div className="">
            <img src={getImageUrl("img/web13.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                Github
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://interactiveratings.netlify.app/">Demo</a> 
              </button>
            </div>
          </div>
          <div className="">
            <img src={getImageUrl("img/web4.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                <a href="https://github.com/Elchin901/Elchin901.github.io/tree/main/web4">Github</a>
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://elchin901.github.io/web4/Spotify.html">Demo</a> 
              </button>
            </div>
          </div>
          <div className="">
            <img src={getImageUrl("img/web5.png")} className="rounded" alt="Louvre"/>
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                <a href="https://github.com/Elchin901/Elchin901.github.io/tree/main/web5">Github</a>
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://elchin901.github.io/web5/Aditii.html">Demo</a>
              </button>
            </div>
          </div>
          <div className="">
            <img src={getImageUrl("img/web3.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                <a href="https://github.com/Elchin901/Elchin901.github.io/tree/main/web3">Github</a>
                
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://elchin901.github.io/web3/Portland.html">Demo</a>
              </button>
            </div>
          </div>
          <div className="">
            <img src={getImageUrl("img/web1.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                <a href="https://github.com/Elchin901/Elchin901.github.io/tree/main/web1">Github</a>
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://elchin901.github.io/web1/Photo.html">Demo</a> 
              </button>
            </div>
          </div>
          <div className="">
            <img src={getImageUrl("img/web6.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                <a href="https://github.com/Elchin901/Elchin901.github.io/tree/main/web6">Github</a>
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                <a href="https://elchin901.github.io/web6/Tajam.html">Demo</a> 
              </button>
            </div>
          </div>        
        </div>

        {/* <div className="flex flex-wrap ">
          <div className="w-full sm:w-1/2 md:w-1/3  px-4 mb-4">
            <img src={getImageUrl("img/web11.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                Github
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                Demo
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  px-4 mb-4">
            <img src={getImageUrl("img/web1.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                Github
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                Demo
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  px-4 mb-4">
            <img src={getImageUrl("img/web1.png")} className="rounded" alt="Louvre" />
            <div className="flex justify-center py-4">
              <button className="px-2 hover:text-violet-500 poppins-regular  sm:text-sm md:text-sm lg:text-md xl:text-lg ">
                Github
              </button>
              <button className="px-2 hover:text-violet-500 poppins-regular sm:text-sm md:text-sm lg:text-md xl:text-lg">
                Demo
              </button>
            </div>
          </div>
        </div> */}




       
      </div>
    </div>
  );
};

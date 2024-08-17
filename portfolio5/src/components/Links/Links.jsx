export const Links = () => {
  return (
    <div className="pb-[150px] ">
      <div>
        <h2 className="poppin-medium color3">Links</h2>
      </div>
      <div className="color3 pt-5 flex gap-5 justify-between">
        <div className="w-1/4">
          <ul className="unstyled  color2 poppins-medium">
          <li className="mb-4">
              <p className="  relative w-max group">
                <span>My Resume</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:left-0"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:right-0"></span>
              </p>
            </li>
            <li className="mb-4">
              <p className="  relative w-max group">
                <span>Github</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:left-0"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:right-0"></span>
              </p>
            </li>
            <li className="mb-4">
              <p className="  relative w-max group">
                <span>LinkedIn</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:left-0"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:right-0"></span>
              </p>
            </li>
            <li className="mb-4">
              <p className="  relative w-max group">
                <span>Gmail</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:left-0"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:right-0"></span>
              </p>
            </li>
            <li className="mb-4">
              <p className="  relative w-max group">
                <span>Number</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:left-0"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 ease-in-out h-1 bg-purple-900 group-hover:w-full group-hover:right-0"></span>
              </p>
            </li>
          </ul>
        </div>
        <div className="w-3/4 ">
          <ul className="poppins-regular grid justify-end">
            <li className="mb-4">
              <a href="https://drive.google.com/file/d/1939OtMOUGFd-o-9LgX0YfYLpmK03tIMg/view?usp=drive_link">
                elchingonagov
              </a>
            </li>

            <li className="mb-4">
              <a href="https://github.com/Elchin901">Elchin901</a>
            </li>
            <li className="mb-4">
              <a href="https://www.linkedin.com/in/elchin-gonagov-6a9b46233">
                linkedin.com/elchin-gonagov
              </a>
            </li>
            <li className="mb-4">
              <a href="mailto:your.elchingonagov@gmail.com">
                elchingonagov@gmail.com
              </a>
            </li>
            <li className="mb-4">+ 48 780 761 421</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Link from "next/link";

// bg-[#4a389c]
const NavBar = (col) => {
  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute" style={col}>
        <div className="container flex items-center justify-between">
          <div className="mx-12">
            <a href="/" className="flex">
              <h2 className="text-white text-xl font-semibold flex-1">Vishrut</h2>&nbsp;
              <div className=" text-white text-xl font-bold flex-1 animate-pulse">:</div>
              <div className=" text-white text-xl font-bold flex-1 animate-pulse"><pre>)</pre></div>
            </a>
          </div>
          {/* ************* Nav bar *************** */}
          <div className="hidden lg:block">
            <ul className="flex items-center">
              
              <li className="group pl-6">
                <a href="/#about">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    About
                  </span>
                </a>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="/#services">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>
                </a>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6 animate-beat">
                <a href="/#portfolio">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Projects
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6 animate-beat">
                <Link href={"/blog"}>
                  <a target={"_blank"}>
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                      Blog
                    </span>
                  </a>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="/#contact">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
  {/* For Mobile */}
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src="/assets//img/icon-close.svg"
              className="h-10 w-auto"
              alt=""
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                About
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Services
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Portfolio
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Clients
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Work
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Statistics
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Blog
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

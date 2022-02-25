import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../assets/images/logo.png'
import notification from '../assets/images/notification.png'
import cart from '../assets/images/cart.png';


function Header(props) {
  const { user } = props
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full justify-between items-center">
              <div className="flex-shrink-0">
                <img
                  className="overflow-hidden h-20 mt-4"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block flex justify-end">
                <div className="ml-10 flex items-center justify-center space-x-4 lg:mt-4">
                  <a
                    href="#"
                    className="text-gray-700 text-sm font-medium"
                  >
                    <img src={notification} alt="" />
                  </a>


                  <a
                    href="#"
                    className="text-gray-700   px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {user}
                  </a>

                  <a
                    href="#"
                    className="text-gray-700   px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <img src={cart} alt="" />
                  </a>

                  <a
                    href="#"
                    className="text-gray-700 border-2 tw-border-gray-400   px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Log-Out
                  </a>

                  <a
                    href="#"
                    className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign-Up
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden w-full">

              <a
                href="#"
                className="text-gray-700 border-2 tw-border-gray-400   px-3 py-2 rounded-md text-sm font-medium"
              >
                Log-Out
              </a>

              <a
                href="#"
                className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign-Up
              </a>


              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default Header;

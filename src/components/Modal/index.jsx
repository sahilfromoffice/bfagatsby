import React from "react";

const Modal = ({ children, Footer, title, show = false, handleClose }) => {
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      className={`${
        show ? "" : "hidden"
      } flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full h-full max-h-screen `}
    >
      <div className="relative p-4 w-max h-max max-w-full">
        <div className="  rounded-lg shadow bg-gray-700">
          <div className="flex justify-between items-center p-3 rounded-t border-b border-gray-600">
            <h3 className="text-2xl font-semibold text-white ">{title}</h3>
            <button
              onClick={handleClose}
              type="button"
              className="text-gray-400 bg-red-600 hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className=" overflow-y-auto  ">{children}</div>
          <div className="flex items-center justify-end p-3 rounded-b border-t border-gray-600 ">
            {Footer && <Footer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

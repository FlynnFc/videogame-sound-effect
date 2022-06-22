import React from "react";
import { useNavigate } from "react-router-dom";

export const IncorrectHard = (props) => {
  const navigate = useNavigate();

  const handleQuit = () => {
    navigate("/play", { replace: true });
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative 	bg-base-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-base-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-2xl leading-6 font-medium text-base-content"
                    id="modal-title"
                  >
                    Incorrect! 🚫
                  </h3>
                  <div className="mt-2">
                    <p className="text-md text-base-content ">
                      Sorry, your answer was incorrect 😒. This is Hard mode so
                      you have no second chances here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-base-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={handleQuit}
                type="button"
                className="btn btn-error mt-3 w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

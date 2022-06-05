import React from "react";
import { useNavigate } from "react-router-dom";

export const CorrectEasy = () => {
  const navigate = useNavigate();

  const handleQuit = () => {
    navigate("/play", { replace: true });
  };

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div class="relative 	bg-base-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div class="bg-base-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-xl leading-6 font-medium text-base-content"
                    id="modal-title"
                  >
                    Correct!
                  </h3>
                  <div class="mt-2">
                    <p class="text-md text-base-content">
                      Your answer was correct. You can continue and increase
                      your score 😁 or if you have had enough you can give up
                      😢.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-base-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="btn btn-success w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium  sm:ml-3 sm:w-auto sm:text-sm"
              >
                Continue
              </button>

              <button
                onClick={handleQuit}
                type="button"
                class="btn btn-error mt-3 w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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

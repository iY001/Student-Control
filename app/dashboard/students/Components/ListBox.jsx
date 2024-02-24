import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { RiCloseCircleFill } from "react-icons/ri"; // Importing the close icon from React Icons

function ListBox({ array, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setSelected(null); 
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-l_grey focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-main sm:text-sm"
          onClick={toggleDropdown}
        >
          <span className="block truncate">
            {selected ? selected : "Select..."}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <div className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </button>
        {
          selected && <div className="flex justify-center items-center ">
          <button
            type="button"
            className="focus:outline-none text-center  "
            onClick={handleCancel}
          >
            <RiCloseCircleFill className="h-5 w-5 text-gray-400 hover:text-gray-500" />
          </button>
        </div>
        }
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute mt-1 w-full max-h-64 overflow-y-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">

          {array?.map((grade, gradeIdx) => (
            <div
              key={gradeIdx}
              className={`relative cursor-default select-none py-2  text-center ${selected === grade ? "bg-sec bg-opacity-70 text-white" : "text-gray-900"
                }`}
              onClick={() => handleSelect(grade)}
            >
              <span className={`block truncate ${selected === grade ? "font-medium" : "font-normal"}`}>
                {grade}
              </span>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
}

export default ListBox;

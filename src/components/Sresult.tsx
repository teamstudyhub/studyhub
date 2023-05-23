import React, { useState } from 'react';
import { SearchIcon } from "@heroicons/react/20/outline"
import { HeartIcon, ShareIcon } from '@heroicons/react/24/solid';

const NotesResult: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = ()=> {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 rounded py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
        onClick={toggleDropdown}
      />
      <SearchIcon className="h-5 w-5 text-green-500 absolute top-3 left-0" />
      {isDropdownOpen && (
        <div className="absolute w-72 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          <div className="border-b px-4 py-2 text-black border-green-500">Results</div>
          <div className="px-4 py-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="ml-3">
                <div className="text-black font-medium">Sample Subject</div>
                <div className="text-gray-500">Uploaded by User</div>
                <div className="text-gray-500 flex items-center space-x-2">
                </div>
              </div>
              <div className="ml-auto">
                <HeartIcon className="h-6 w-6 text-red-500 cursor-pointer" />
                <ShareIcon className="h-6 w-6 text-green-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesResult;
// const Nav = () => {
//    const links = [
//         {   
//             id: 1,
//             name: 'English Cards'
//         }, 
//         {
//             id: 2,
//             name: 'Math Cards'
//         }
//    ];

//   return (
//     <>
//       {/* <div className="navBar w-full h-16 bg-[#111827] flex justify-center">
//         <ul className="flex justify-around items-center w-3xl">
//             {links.map((item) => {
//                 return <li key={item.id} className="text-2xl cursor-pointer"><h2>{item.name}</h2></li>   
//             })}
//         </ul> */}

            




      
//     </>
//   )
// }

// export default Nav

import React, { useState } from 'react';

const Nav = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
      {   
         id: 1,
         name: 'English Cards'
      }, 
      {
        id: 2,
        name: 'Math Cards'
      }
  ];

  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-dropdown" 
          aria-expanded={isMainMenuOpen}
          onClick={toggleMainMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMainMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
            </li>
            <li className="relative">
              <button 
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdown}
              >
                Cards
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {/* Dropdown menu */}
              <div 
                className={`${isDropdownOpen ? 'block' : 'hidden'} z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <a href="src/pages/English.jsx" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Vocabulary</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Animals</a>
                  </li>
                </ul>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Nav;





import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBranchSubmenuOpen, setIsBranchSubmenuOpen] = useState(false);
  const [isMenuSubmenuOpen, setIsMenuSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBranchSubmenu = () => {
    setIsBranchSubmenuOpen(!isBranchSubmenuOpen);
  };

  const toggleMenuSubmenu = () => {
    setIsMenuSubmenuOpen(!isMenuSubmenuOpen);
  };

  return (
    <div className="mx-4 md:mx-40 my-12 flex flex-row justify-between items-center">
      {/* Icons (Visible only on desktop) */}
      <div className="hidden md:flex gap-4">
        <div className="bg-[#E5F2E9] p-3 rounded-full hover:bg-[#D1E8D9] transition-colors">
          <svg className="text-[#417F56]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.618 21.25c0-3.602-4.016-6.53-7.618-6.53c-3.602 0-7.618 2.928-7.618 6.53M12 11.456a4.353 4.353 0 1 0 0-8.706a4.353 4.353 0 0 0 0 8.706"/>
          </svg>
        </div>
        <div className="bg-[#E5F2E9] p-3 rounded-full hover:bg-[#D1E8D9] transition-colors">
          <svg className="text-[#417F56]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path fill="currentColor" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"/>
              <path d="M5 4h17l-2 11H7L5 4Zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2c0 1.219.946 2 2.73 2H19.5"/>
            </g>
          </svg>
        </div>
        <div className="bg-[#E5F2E9] p-3 rounded-full hover:bg-[#D1E8D9] transition-colors">
          <svg className="text-[#417F56]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
            <path fill="currentColor" d="m11.271 11.978l3.872 3.873a.502.502 0 0 0 .708 0a.502.502 0 0 0 0-.708l-3.565-3.564c2.38-2.747 2.267-6.923-.342-9.532c-2.73-2.73-7.17-2.73-9.898 0c-2.728 2.729-2.728 7.17 0 9.9a6.955 6.955 0 0 0 4.949 2.05a.5.5 0 0 0 0-1a5.96 5.96 0 0 1-4.242-1.757a6.01 6.01 0 0 1 0-8.486a6.004 6.004 0 0 1 8.484 0a6.01 6.01 0 0 1 0 8.486a.5.5 0 0 0 .034.738"/>
          </svg>
        </div>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#417F56] focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-20 left-0 w-full md:w-auto bg-[#F7FAF7] md:bg-transparent z-10 shadow-lg md:shadow-none transition-all duration-300 ease-in-out`}>
        <div className="p-6 md:p-0">
          {/* Icons (Visible only in mobile menu) */}
          <div className="md:hidden flex gap-4 mb-6 justify-center">
            <div className="bg-[#E5F2E9] p-3 rounded-full hover:bg-[#D1E8D9] transition-colors">
              <svg className="text-[#417F56]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.618 21.25c0-3.602-4.016-6.53-7.618-6.53c-3.602 0-7.618 2.928-7.618 6.53M12 11.456a4.353 4.353 0 1 0 0-8.706a4.353 4.353 0 0 0 0 8.706"/>
              </svg>
            </div>
            <div className="bg-[#E5F2E9] p-3 rounded-full hover:bg-[#D1E8D9] transition-colors">
              <svg className="text-[#417F56]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path fill="currentColor" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"/>
                  <path d="M5 4h17l-2 11H7L5 4Zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2c0 1.219.946 2 2.73 2H19.5"/>
                </g>
              </svg>
            </div>
            <div className="bg-[#E5F2E9] p-3 rounded-full hover:bg-[#D1E8D9] transition-colors">
              <svg className="text-[#417F56]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill="currentColor" d="m11.271 11.978l3.872 3.873a.502.502 0 0 0 .708 0a.502.502 0 0 0 0-.708l-3.565-3.564c2.38-2.747 2.267-6.923-.342-9.532c-2.73-2.73-7.17-2.73-9.898 0c-2.728 2.729-2.728 7.17 0 9.9a6.955 6.955 0 0 0 4.949 2.05a.5.5 0 0 0 0-1a5.96 5.96 0 0 1-4.242-1.757a6.01 6.01 0 0 1 0-8.486a6.004 6.004 0 0 1 8.484 0a6.01 6.01 0 0 1 0 8.486a.5.5 0 0 0 .034.738"/>
              </svg>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-md">
            <li>
              <a href="#" className="block py-2 hover:text-[#417F56] transition-colors">تماس با ما</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#417F56] transition-colors">درباره ما</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#417F56] transition-colors">اعطای نمایندگی</a>
            </li>
            <li className="relative">
              <button onClick={toggleBranchSubmenu} className="flex items-center gap-2 py-2 hover:text-[#417F56] transition-colors w-full text-right md:text-center">
                شعبه
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isBranchSubmenuOpen && (
                <ul className="mt-2 md:absolute md:bg-white md:shadow-lg md:p-4 rounded-md flex flex-col gap-2 pl-4 md:pl-0">
                  <li><a href="#" className="block py-1 hover:text-[#417F56] transition-colors">تهران</a></li>
                  <li><a href="#" className="block py-1 hover:text-[#417F56] transition-colors">شیراز</a></li>
                  <li><a href="#" className="block py-1 hover:text-[#417F56] transition-colors">اصفهان</a></li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button onClick={toggleMenuSubmenu} className="flex items-center gap-2 py-2 hover:text-[#417F56] transition-colors w-full text-right md:text-center">
                منو
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isMenuSubmenuOpen && (
                <ul className="mt-2 md:absolute md:bg-white md:shadow-lg md:p-4 rounded-md flex flex-col gap-2 pl-4 md:pl-0">
                  <li><a href="#" className="block py-1 hover:text-[#417F56] transition-colors">غذاها</a></li>
                  <li><a href="#" className="block py-1 hover:text-[#417F56] transition-colors">نوشیدنی‌ها</a></li>
                  <li><a href="#" className="block py-1 hover:text-[#417F56] transition-colors">دسرها</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#417F56] transition-colors">صفحه اصلی</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="w-32">
        <img src="https://s6.uupload.ir/files/logo_ocnj.png" alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
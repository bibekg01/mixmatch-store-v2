import { FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { RxAvatar } from "react-icons/rx";
import ThemeButton from "./themeButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./loginPage";
import { FaCaretDown } from "react-icons/fa";

const DropdownLinks = [
  {
    id: 1,
    name: "Womens Fashion",
  },
  {
    id: 2,
    name: "Mens Fashion",
  },
  {
    id: 3,
    name: "Babies & Toys",
  },
  {
    id: 4,
    name: "Accessories",
  },
  {
    id: 5,
    name: "Bags",
  },
  {
    id: 6,
    name: "Shoes",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [popUps, setPopUps] = useState(false);
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-evenly gap-3 bg-[#064789] text-white font-bold text-2xl items-center pt-2">
        {/* Logo Section  */}
        <div>
          <img
            src={Logo}
            alt=""
            className="size-10 sm:size-20 cursor-pointer"
            onClick={handleBack}
          />
        </div>

        {/* Category Section  */}

        <div className="hidden sm:block group text-[15px] md:text-lg lg:text-xl relative cursor-pointer">
          <a href="#" className="flex h-[72px] items-center gap-[7px]">
            Category
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>

          {/* Dropdown Menu  */}
          <div className="absolute -left-9 z-[9999] text-xl  hidden w-[180px] group-hover:block bg-gray-700  p-2 shadow-md rounded-md">
            <ul className="space-y-3">
              {DropdownLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="inline-block w-[full] rounded-md p-2 hover:bg-pink-50 hover:text-slate-800"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Search Section  */}

        <div className="flex">
          <input
            type="search"
            name=""
            id=""
            className="rounded-3xl md:text-xl text-lg sm:px-3 sm:pl-12  w-[110px] h-[20px] md:w-[300px] xl:w-[400px] md:h-[35px] text-black font-normal"
          />
          <FaSearch className="absolute text-black md:ml-3 ml-2 md:mt-2 mt-1 opacity-50 size-3 md:size-5" />
        </div>
        {/* Login Section  */}
        <div
          className="border-2 border-[#064789] py-1 px-2 rounded-xl text-[20px] md:text-md flex gap-2 hover:border-slate-100 hover:shadow-xl cursor-pointer"
          onClick={() => setPopUps(true)}
        >
          <RxAvatar className="mt-2" />
          <h1 className="hidden sm:block">login</h1>
        </div>

        <ThemeButton />
      </div>

      {popUps && (
        <div className="absolute bg-[gray] bg-opacity-20 w-[200vh] h-[100vh] text-center ">
          <h1 className="text-white text-3xl absolute text-end"> X</h1>
          <div>
            <LoginPage onClick={() => setPopUps(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

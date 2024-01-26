import UserDarkMode from "./DarkMode";
import logo from "/assets/Container/main_logo.svg";
import { Link, useLocation } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";

import {
  Category,
  ArrowCircleRight2,
  Setting2,
  DiscountShape,
  // People,
  // WalletMoney,
  // Logout,
  InfoCircle,
  Notification,
  Box,
  Profile2User,
  TrendUp,
} from "iconsax-react";

const TopIconsArray = [
  { Icon: Category, link: "/", variant: "Bulk" },
  { Icon: TrendUp, link: "/trend" },
  { Icon: Profile2User, link: "/profile" },
  { Icon: Box, link: "/notification" },
  { Icon: DiscountShape, link: "/pSettings" },
  { Icon: InfoCircle, link: "/info" },
];

const BtmIconsArray = [
  { Icon: ArrowCircleRight2, link: "/arrow" },
  { Icon: Setting2, link: "/settings" },
  { Icon: Notification, link: "/notification" },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen }) => {
  // const isSmallScreen = useMediaQuery({
  //   query: "(max-width: 600px)",
  // });

  const location = useLocation();

  return (
    <div
      className={`h-full bg-[#F7F8FA] z-10 fixed lg:ml-0  w-[50px] lg:w-[80px] pb-5 ${
        isOpen ? "ml-0" : "-ml-80"
      } block md:block dark:bg-black/80 dark:text-white transition-margin pt-4`}
    >
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="h-8 w-8 " />
      </div>
      <nav className="bg-[#F7F8FA] dark:bg-black/80 relative pt-3 border-r-1 border-grey-200 w-full h-full flex flex-col items-center justify-between">
        <ul className="w-full flex pt-3 flex-col items-center justify-center relative">
          {TopIconsArray.map(({ Icon, link, variant }) => (
            <li
              key={link}
              className={`flex items-center before:content-[''] before:absolute before:right-0 before:h-[21px] before:w-[3px] dark:before:bg-white before:bg-black/80 before:rounded-tl-md before:rounded-bl-md before:transition-all before:duration-300 mb-[20px] text-[#B7B0B0] dark:text-white ${
                location.pathname === link
                  ? "before:opacity-100"
                  : "before:opacity-0"
              } hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100`}
            >
              <Link
                to={link}
                className="flex items-center justify-center h-10 w-full relative"
              >
                <Icon
                  size={26}
                  aria-hidden
                  variant={variant ? "Bulk" : "Broken"}
                />
              </Link>
            </li>
          ))}
        </ul>

        <UserDarkMode />
        <ul>
          {BtmIconsArray.map(({ Icon, link, variant }) => (
            <li
              key={link}
              className={`flex items-center before:content-[''] before:absolute before:right-0 before:h-[21px] before:w-[3px] before:bg-black before:rounded-tl-md before:rounded-bl-md before:transition-all before:duration-300 mb-[20px] text-[#B7B0B0] dark:text-white ${
                location.pathname === link
                  ? "before:opacity-100"
                  : "before:opacity-0"
              } hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100`}
            >
              <a href={link}>
                <Icon
                  size={23}
                  aria-hidden
                  variant={variant ? "Bulk" : "Broken"}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

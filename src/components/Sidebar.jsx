import UserDarkMode from "./DarkMode";
import logo from "/assets/Container/main_logo.svg";
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
  { Icon: Category, link: "/category", variant: "Bulk" },
  { Icon: TrendUp, link: "/trend" },
  { Icon: Profile2User, link: "/profile" },
  { Icon: Box, link: "/box" },
  { Icon: DiscountShape, link: "/discount" },
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

  return (
    <div
      className={`h-full z-10 fixed lg:ml-0 w-[80px] md:w-[80] ${
        isOpen ? "ml-0" : "-ml-80"
      } block md:block dark:bg-black dark:text-white transition-margin`}
    >
      <nav className="bg-[#F7F8FA] dark:bg-black pt-3 border-r-1 border-grey-200 w-full h-full flex flex-col items-center justify-between">
        <ul className="w-full flex pt-3 flex-col items-center justify-center relative">
          <li className="mb-2">
            <a href="#">
              <img src={logo} alt="logo" className="h-8 w-8" />
            </a>
          </li>
          {TopIconsArray.map(({ Icon, link, variant }) => (
            <li
              key={link}
              className="relative mb-[20px] border-r-3 hover:border-black text-[#B7B0B0] dark:text-white"
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

        <UserDarkMode />
        <ul>
          {BtmIconsArray.map(({ Icon, link, variant }) => (
            <li
              key={link}
              className="relative mb-[20px] border-r-3 hover:border-black text-[#B7B0B0] dark:text-white"
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

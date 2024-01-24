import logo from "/assets/logo.svg";
import category from "/assets/category.svg";
import trend from "/assets/trend-up.svg";

const SidebarIcons = {
  Logo: logo,
  Category: category,
  Trend: trend,
};

const Sidebar = () => {
  return (
    <nav className="bg-[#F7F8FA] pt-3 border-r-2 border-grey-200 w-[80px] h-full flex justify-center flex-col items-center">
      <ul>
        {Object.keys(SidebarIcons).map((iconName) => (
          <li key={iconName} className="mb-[20px]">
            <img src={SidebarIcons[iconName]} alt={iconName} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;

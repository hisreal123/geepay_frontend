import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="dashboard-layout min-h-screen h-screen pb-[10px] grid grid-col-2">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div>
          <Header toggleSidebar={toggleSidebar} />

          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

//   return (
//     <div className="dashboard-layout min-h-screen h-screen pb-[20px] flex ">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="mainContent_wrapper lg:ml-[80px]">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="relative main_content_body grid grid-cols-1 lg:grid-cols-5 gap-4 lg-gap-5  px-3 lg:px-4 py-[20px] min-h-full">
//           <div className="lft gap-4 grid lg:col-span-3 h-fit ">
//             <UserChart />
//             <Cards custom_style="block lg:hidden" />
//             <Tables />
//           </div>
//           <div className="rth lg:col-span-2 lg:h-[120vh]  lg:overflow-y-auto scrollbar-hide">
//             <Cards custom_style="hidden lg:grid " />
//             <Progress />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default DashboardLayout;

//  <div>
//    <Header toggleSidebar={toggleSidebar} />
//    <Home />
//  </div>;

import { Suspense, lazy } from "react";
import { useLayoutContext } from "../components/utils/LayoutContext";

const UserChart = lazy(() => import("../components/UserChart"));
const Cards = lazy(() => import("../components/Cards"));
const Tables = lazy(() => import("../components/Tables"));
const Progress = lazy(() => import("../components/Progress"));

const Home = () => {
  const { isSidebarOpen } = useLayoutContext();

  return (
    <div
      className={`${
        !isSidebarOpen ? "lg:ml-[80px]" : "lg:ml-0"
      } ark:bg-black/80 relative main_content_body bg-[#FAFAFA] grid grid-cols-1 lg:grid-cols-5 gap-4 
      lg-gap-5  px-3 lg:px-4 pt-[20px] h-fit overflow-hidden`}
    >
      <div className="lft gap-4 grid lg:col-span-3 h-full relative pb-4">
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              Chill bro...
            </div>
          }
        >
          <UserChart custom_style="" />
          <Cards custom_style="grid lg:hidden relative " />
          <Tables />
        </Suspense>
      </div>
      <div
        className={`rth z-10 pb-4 lg:col-span-2 relative grid  lg:gap-4 ${
          isSidebarOpen ? "lg:gap-4" : "lg:gap-4 w-fit"
        } w-full`}
      >
        <Suspense fallback={<div className="hidden">Chill bro...</div>}>
          <Cards custom_style="hidden lg:grid" />
          <Progress />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

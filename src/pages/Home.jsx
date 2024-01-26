import { Suspense, lazy } from "react";

const UserChart = lazy(() => import("../components/UserChart"));
const Cards = lazy(() => import("../components/Cards"));
const Tables = lazy(() => import("../components/Tables"));
const Progress = lazy(() => import("../components/Progress"));

const Home = () => {
  return (
    <div className="relative main_content_body bg-white grid grid-cols-1 lg:grid-cols-5 gap-4 lg-gap-5 lg:ml-[80px] px-3 lg:px-4 py-[20px] min-h-full">
      <div className="lft gap-4 grid lg:col-span-3 h-fit relative pb-4">
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              Chill bro...
            </div>
          }
        >
          <UserChart custom_style=" bg-red-" />
          <Cards custom_style="block lg:hidden relative max-w-[100vw]" />
          <Tables />
        </Suspense>
      </div>
      <div className="rth lg:col-span-2 lg:h-[120vh] relative lg:overflow-y-auto scrollbar-hide">
        <Suspense fallback={<div className="">chill bro...</div>}>
          <Cards custom_style="hidden lg:grid " />
          <Progress />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

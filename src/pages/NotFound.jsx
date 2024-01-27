import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="lg:ml-[80px] flex justify-center items-center h-screen relative flex-col">
      <h1> Go Home, Don&lsquo;t go hard.</h1>

      <div className="flex items-center">
        <Link to="/">Home </Link>
        <h1 className="text-2xl">⚒️ 🛤️</h1>
      </div>
    </div>
  );
};

export default NotFound;

import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
  const progressData = [
    {
      tag: "Book Bazaar",
      rate: "+15%",
      amount: "2,500,000",
      bgColor: "#6160DC",
      completed: 60,
    },
    {
      tag: "Artisan Aisle",
      rate: "+10%",
      amount: "1,800,000",
      bgColor: "#54C5EB",
      completed: 40,
    },
    {
      tag: "Toy Troop",
      rate: "+8%",
      amount: "1,200,000",
      bgColor: "#FFB74A",
      completed: 30,
    },
    {
      tag: "Toy Troop",
      rate: "+5%",
      amount: "1,700,000",
      bgColor: "#FF4A55",
      completed: 20,
    },
    {
      tag: "Tech Haven",
      rate: "+10%",
      amount: "3,200,000",
      bgColor: "#4CAF50",
      completed: 40,
    },
    {
      tag: "Fashion Emporium",
      rate: "+8%",
      amount: "1,800,000",
      bgColor: "#FF9800",
      completed: 75,
    },
    {
      tag: "Gourmet Delights",
      rate: "+12%",
      amount: "1,000,000",
      bgColor: "#E91E63",
      completed: 90,
    },
    {
      tag: "Artistic Creations",
      rate: "+20%",
      amount: "4,500,000",
      bgColor: "#795548",
      completed: 30,
    },
    {
      tag: "Fitness Hub",
      rate: "+18%",
      amount: "3,000,000",
      bgColor: "#FFC107",
      completed: 50,
    },
  ];
  return (
    <div className="progress bg-white border-[0.02px] border-gray-100/50  rounded-lg shadow-lg px-3 h-u ">
      <div className="py-2 mt-2 top flex justify-between text-xs md:text-sm lg:text-md font-bold">
        <h2 className=""> Top Platform </h2>
        <span className="text-[#34CAA5] cursor-pointer">See All</span>
      </div>
      <div className="h-[500px] overflow-y-scroll">
        {progressData.map((data) => (
          <div key={data.tag}>
            <h2 className="font-bold text-sm lg:text-md py-2">{data.tag}</h2>
            <ProgressBar
              completed={data.completed}
              bgColor={data.bgColor}
              height={15}
              isLabelVisible={false}
              transitionDuration="2s"
              animateOnRender={true}
              transitionTimingFunction="ease-in-out"
            />
            <div className="flex justify-between py-2 text-gray-600 text-sm  md:text-md lg:text-md">
              <h4>${data.amount}</h4>
              <h4>{data.rate}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;

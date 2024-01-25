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
  ];
  return (
    <div className="bg-white shadow-lg mt-4 px-3">
      <div className=" py-4 mt-4 top flex justify-between text-xs md:text-sm lg:text-md font-bold">
        <h2 className=""> Top Platform </h2>
        <span className="text-[#34CAA5] cursor-pointer">See All</span>
      </div>

      {progressData.map((data) => (
        <div key={data.tag}>
          <h2 className="font-bold">{data.tag}</h2>
          <ProgressBar
            completed={data.completed}
            bgColor={data.bgColor}
            height={15}
            isLabelVisible={false}
            transitionDuration="2s"
            animateOnRender={true}
            transitionTimingFunction="ease-in-out"
          />
          <div className="flex justify-between py-2 text-gray-600">
            <h4>${data.amount}</h4>
            <h4>{data.rate}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;

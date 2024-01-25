import trend_up from "/assets/rightChart/trending-up.svg";
import trend_down from "/assets/rightChart/trending-down.svg";
import order_icon from "/assets/rightChart/order.svg";
import refund_icon from "/assets/rightChart/Refund.svg";
import sales_icon from "/assets/rightChart/Sales.svg";
import income_icon from "/assets/rightChart/Income.svg";
import sales_chart from "/assets/rightChart/Sales_chart.svg";
import order_chart from "/assets/rightChart/order_chart.svg";

// eslint-disable-next-line react/prop-types
const Cards = ({ custom_style }) => {
  const cards = [
    {
      name: "Total Order",
      price: 350,
      lftIcon: order_icon,
      rate: "23.5",
      checkRate: true,
      nodes: [],
    },
    {
      name: "Total Refund",
      price: 270,
      lftIcon: refund_icon,
      rate: "23.5",
      checkRate: false,
      nodes: [],
    },
    {
      name: "Average Sales",
      price: 1567,
      lftIcon: sales_icon,
      rate: "23.5",
      checkRate: false,
      nodes: [],
    },
    {
      name: "Total Income",
      price: "$350.000",
      lftIcon: income_icon,
      rate: "23.5",
      checkRate: true,
      nodes: [],
    },
  ];

  return (
    <div className={`grid grid-cols-2 gap-4 ${custom_style}`}>
      {cards.map((data) => (
        <div
          className="cardDetails rounded-xl bg-white px-2 py-3 shadow-md"
          key={data.price}
        >
          <div className="tp flex justify-between">
            <img src={data.lftIcon} alt="" />
            {data.checkRate ? (
              <img src={order_chart} alt="" className="w-[50%]" />
            ) : (
              <img src={sales_chart} alt="" className="w-[50%]" />
            )}
          </div>
          <h1 className="my-2 text-md lg:text-xl lg:my-5  text-[#898989]">
            {data.name}
          </h1>
          <p className="prc  text-lg lg:text-2xl text-[#3A3F51] my-3 font-bold">
            {data.price}
          </p>
          <div className="flex">
            <span
              className={`text-xs flex items-center px-[.3rem] py-[.2rem] rounded-full ${
                data.checkRate
                  ? "bg-[#34CAA5]/[30%] text-[#34CAA5]"
                  : "bg-[#ED544E]/[30%] text-[#ED544E]"
              } `}
            >
              {data.checkRate ? (
                <img src={trend_up} alt="trade_up" className="mr-1" />
              ) : (
                <img src={trend_down} alt="trade_down" className="mr-1" />
              )}
              {data.rate}%
            </span>
            <span className="text-[#606060] text-[.6rem] md:text-sm lg:text-md ml-1">
              vs. previous month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

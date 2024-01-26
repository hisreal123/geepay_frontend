import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import dowload_d from "/assets/dowload_d.svg";
import user_img1 from "/assets/profile_images/img1.jpg";
import user_img2 from "/assets/profile_images/img2.jpg";
import user_img3 from "/assets/profile_images/img3.jpg";
import user_img4 from "/assets/profile_images/img4.jpg";
import user_img5 from "/assets/profile_images/img5.jpg";

const Tables = () => {
  const nodes = [
    {
      name: "Marcus Bergson",
      avatar: user_img1,
      date: new Date(),
      amount: "$80,000",
      status: "Paid",
      nodes: [],
    },
    {
      name: "Jaydon Vaccaro",
      avatar: user_img2,
      date: new Date(),
      amount: "$150,000",
      status: "Refund",
      nodes: [],
    },
    {
      name: "Corey Schleifer",
      avatar: user_img3,
      date: new Date(),
      amount: "$87,000",
      status: "Paid",
      nodes: [],
    },
    {
      name: "Cooper Press",
      avatar: user_img4,
      date: new Date(),
      amount: "$100,000",
      status: "Refund",
      nodes: [],
    },
    {
      name: "Phillip Lubin",
      avatar: user_img5,
      date: new Date(),
      amount: "$78,000",
      status: "Paid",
      nodes: [],
    },
  ];

  const data = { nodes };

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns:  250px 150px 25% 25% 50%;
      `,
      BaseCell: `
        &:nth-of-type(2) {
          left: 0px;
        }

        &:nth-of-type(2) {
          left: 250px;
        }
      `,
    },
  ]);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const COLUMNS = [
    {
      label: "Name",
      renderCell: (item) => (
        <div className="flex items-center">
          <div>
            <div className="relative flex h-[20px] w-[20px] lg:h-[32px] lg:w-[32px] rounded-full lg:block justify-center items-center">
              <img
                src={item.avatar}
                alt={`${item.name}'s profile pic`}
                aria-label={`${item.name}'s profile pic`}
                className="h-full w-full rounded-full object-cover inline-block"
              />
            </div>
          </div>
          <span className="ml-1 text-xs py-3 md:text-sm lg:text-md font-bold text-black">
            {item.name}
          </span>
        </div>
      ),
    },
    {
      label: "Date",

      renderCell: (item) => (
        <span className="text-xs md:text-sm lg:text-md">
          {formatDate(item.date)}
        </span>
      ),
    },
    {
      label: "Amount",
      renderCell: (item) => (
        <span className="text-xs md:text-sm lg:text-md font-bold text-black">
          {item.amount}
        </span>
      ),
    },
    {
      label: "Status",
      renderCell: (item) => (
        <span
          className={`text-xs md:text-sm lg:text-md ${
            item.status === "Refund" ? "text-[#ED544E]" : "text-[#34CAA5]"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      label: "Invoice",
      renderCell: () => (
        <span className="text-xs md:text-sm lg:text-md flex space-x-2 items-center">
          <img src={dowload_d} alt="download_document" />
          <span className="text-black">View</span>
        </span>
      ),
    },
  ];

  return (
    <div className="relative max-w-[100] bg-white border-[0.02px] border-gray-100/50  rounded-lg lg:overflow-x-hidden">
      <div className="py-4 px-3 top flex justify-between text-xs md:text-sm lg:text-md font-bold">
        <h2 className=""> Last Orders </h2>
        <span className="text-[#34CAA5] cursor-pointer">See All</span>
      </div>
      <div className="table-container">
        <CompactTable
          columns={COLUMNS}
          data={data}
          theme={theme}
          // layout={{ custom: true }}
        />
      </div>
    </div>
  );
};

export default Tables;

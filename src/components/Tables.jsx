import { Link } from "react-router-dom";
import dowload_d from "/assets/dowload_d.svg";
import user_img1 from "/assets/profile_images/img1.jpg";
import user_img2 from "/assets/profile_images/img2.jpg";
import user_img3 from "/assets/profile_images/img3.jpg";
import user_img4 from "/assets/profile_images/img4.jpg";
import user_img5 from "/assets/profile_images/img5.jpg";
import { Table } from "flowbite-react";

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

  const options = { month: "short", day: "numeric", year: "numeric" };
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <div className="lg:-mt-[125px] bg-white h-fit relative border-[1px] border-[#EDF2F7] rounded-[14px] dark:text-white border-gray-100/50  overflow-x-auto ">
        <div className="py-4 px-5 top flex justify-between text-xs md:text-sm lg:text-md font-bold">
          <h2 className=""> Last Orders </h2>
          <span className="text-[#34CAA5] cursor-pointer">See All</span>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head className="font-bold border-b border-grey-100 text-grey-200 bg-white ">
              <Table.HeadCell className="bg-white">Name</Table.HeadCell>
              <Table.HeadCell className="bg-white">Date</Table.HeadCell>
              <Table.HeadCell className="bg-white">Amount</Table.HeadCell>
              <Table.HeadCell className="bg-white">Status</Table.HeadCell>
              <Table.HeadCell className="bg-white">Invoice</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {nodes.map((node, index) => (
                <Table.Row key={index} className="bg-white ">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center text-xs md:text-sm lg:text-md font-bold text-black dark:text-white">
                      <Link to="/profile">
                        <div className="relative mr-2 flex h-[20px] w-[20px] lg:h-[32px] lg:w-[32px] rounded-full lg:block justify-center items-center">
                          <img
                            src={node.avatar}
                            alt={`${node.name}'s profile pic`}
                            aria-label={`${node.name}'s profile pic`}
                            className="h-full w-full rounded-full object-cover inline-block"
                          />
                        </div>
                      </Link>
                      <Link to="/profile">{node.name}</Link>
                    </div>
                  </Table.Cell>

                  <Table.Cell className=" relative">
                    <span className="md:text-sm lg:text-md dark:text-white">
                      {formatDate(node.date)}
                    </span>
                  </Table.Cell>
                  <Table.Cell className="text-xs md:text-sm lg:text-md font-bold text-black dark:text-white">
                    {node.amount}
                  </Table.Cell>
                  <Table.Cell
                    className={`text-xs md:text-sm lg:text-md ${
                      node.status === "Refund"
                        ? "text-[#ED544E]"
                        : "text-[#34CAA5]"
                    }`}
                  >
                    {node.status}
                  </Table.Cell>
                  <Table.Cell className="relative dark:text-white">
                    <div className="flex space-x-2 text-xs md:text-md lg:text-[1rem] dark:text-white">
                      <img src={dowload_d} alt="download_document" />
                      <span className="text-black dark:text-white">View</span>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Tables;

import React from "react";
import BarChart from "../../components/charts/BarChart";
import { DataTable } from "../../components/data-table/DataTable";
import StatisticsSideBar from "./StatisticsSideBar";

const Statistics = () => {
  const gTableJson = [
    {
      graphData: {
        data: [334, 4455, 6, 77, 3332, 443],
      },
      tableData: {
        tHead: ["22,344", "22,344", "22,344", "22,344", "22,344"],
        tRow: ["22,344", "22,344", "22,344", "22,344", "22,344"],
      },
    },
    {
      graphData: {
        data: [334, 4455, 6, 77, 3332, 443],
      },
      tableData: {
        tHead: ["22,344", "22,344", "22,344", "22,344", "22,344"],
        tRow: ["22,344", "22,344", "22,344", "22,344", "22,344"],
      },
    },
  ];

  return (
    <>
      <div className="flex w-full px-5 py-8">
        <div className="w-1/6">
          <StatisticsSideBar />
        </div>
        <div
          className="flex ml-4 mt-50 w-9/12"
          style={{
            overflow: "scroll",
          }}
        >
          {gTableJson?.map((i) => {
            return (
              <div>
                <BarChart />
                <DataTable tableData={i?.tableData} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Statistics;

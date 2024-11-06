/*
  TODO: 
  Implement the functionality of Search, Pagination, Sort by column and Row size control
*/
import React from "react";
import { fakeData } from "./data";
import "./index.css";
import { useEffect } from "react";

export default function App() {
  const [search, setSearch] = React.useState("");
  const [sortedData, setSortedData] = React.useState(fakeData);
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    setSortedData(fakeData);
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value, fakeData, "fakeData");

    if (e.target.value === "") {
      setSortedData(fakeData);
    } else {
      const filteredData = fakeData.filter((item) => {
        return item.name?.toLowerCase().includes(e.target.value);
      });
      setSortedData(filteredData);
    }
  };
  const handleSort = () => {
    setSortedData(
      fakeData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    );
  };
  useEffect(() => {
    const array = [];
    for (var i = 0; i < fakeData.length; i++) {
      if (i >= (page - 1) * Number(pageSize) && i < page * Number(pageSize)) {
        array.push(fakeData[i]);
        setSortedData(array);
      }
    }
  }, [page, pageSize]);

  return (
    <div className="p-[20px] flex flex-col gap-2">
      {/* SEARCH */}

      <div className="flex gap-8">
        <div>
          <input
            className="p-2 border border-black min-w-[300px]"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* GRID SELF */}

      <div className="max-h-[calc(100vh-200px)] overflow-scroll border-b-2 border-[black]">
        <table className="table-layout w-full text-sm">
          <thead className="bg-[black] text-white">
            <tr className="text-left h-[35px]">
              <th>
                Name
                <button className="ml-2 p-[2px]" onClick={handleSort}>
                  ^
                </button>
              </th>
              <th>
                Email<button className="ml-2 p-[2px]">^</button>
              </th>
              <th>
                Occupation<button className="ml-2 p-[2px]">^</button>
              </th>
              <th>
                City<button className="ml-2 p-[2px]">^</button>
              </th>
              <th>
                Country<button className="ml-2 p-[2px]">^</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((data, index) => {
              return (
                <tr key={index} className="border">
                  <td>{data.name}</td>
                  <td className="font-bold">{data.email}</td>
                  <td>{data.occupation}</td>
                  <td className="text-[green]">{data.city}</td>
                  <td>{data.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}

      <div className="flex justify-between">
        <div>
          <label htmlFor="row-size" className="flex gap-2 py-[5px]">
            <span className="font-bold text-sm">Row size</span>
            <select
              id="row-size"
              className="text-sm"
              onChange={(e) => setPageSize(e.target.value)}
            >
              <option>15</option>
              <option>25</option>
              <option>50</option>
            </select>
          </label>
        </div>

        <div className="pagination flex justify-center items-center gap-4">
          <button className="p-[5px]">{"<"}</button>

          <div className="flex gap-2">
            <button
              className="p-[5px] active-pg-num"
              onClick={() => setPage(1)}
            >
              1
            </button>
            <button className="p-[5px] " onClick={() => setPage(2)}>
              2
            </button>
            <button className="p-[5px] " onClick={() => setPage(3)}>
              3
            </button>
            <button className="p-[5px] ">...</button>
            <button className="p-[5px] ">10</button>
          </div>

          <button className="p-[5px]">{">"}</button>
        </div>
      </div>
    </div>
  );
}

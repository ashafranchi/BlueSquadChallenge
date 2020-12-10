import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table.jsx";
import axios from "axios";
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js';

function Dashboard() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const info = [
    {"name":"Missions Started", "data": {"2017-01-01": 3, "2017-01-02": 4,}},
    {"name":"Missions Completed", "data": {"2017-01-01": 5, "2017-01-02": 3,}}
  ];

  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

    /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
 const columns = useMemo(
  () => [
    {
      // first group - TV Show
      Header: "TV Show",
      // First group columns
      columns: [
        {
          Header: "Type",
          accessor: "show.type"
        },
        {
          Header: "Name",
          accessor: "show.name"
        },
        {
          Header: "# started",
          accessor: "show.language"
        },
        {
          Header: "# completed",
          accessor: "show.runtime"
        },
        {
          Header: "# rejected",
          accessor: "show.status"
        }
      ]
    },
  ],
  []
);

  return (
    <div className="dashboard">
      <h1>Missions</h1>
          <div className="activity">
            <h3>Activity</h3>
            <div className="linechart">
            <LineChart data={info} legend="bottom" colors={["#08A0CB", "#6533CB"]}/>
            </div>
          </div>
          <div className="log">
            <h3>Log</h3>
            <div className="table">
            <Table columns={columns} data={data} />
            </div>
          </div>
    </div>
  );
}

export default Dashboard;
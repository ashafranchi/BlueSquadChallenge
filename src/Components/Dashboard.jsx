import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table.jsx";
import axios from "axios";
import { LineChart} from 'react-chartkick'
import 'chart.js';

const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvbzMzdzRuZmc2a2c0Nzh2ZDA1OTJkdzc5ZmkxMnFzMyIsImlzcyI6ImJsdWVzcXVhZC5jbyJ9.m8_2aasZEQPWAk0rsfuvQjJi_pqBcKBiIwYbogRtmm6gkHF3PVgyVLk6qq5vLasAz7QegnVjsXY2Q1GrCY-YpaLYZZVQ3KWMPvMN9gs9Ac3-dxaML2jeBCH5uC0F1N1SWSKUPhJJPechIfe56h8Ede4BDo34GBOFWBG_Q0GKV1ckJIgplYDyNMJt1hz_btVHdzvQ6oNpWWldq1C6xAf3uuK9uYdP9VhKAapiH10etZQWNuQFzDAoycaR2x3qdCSipb9fTdGehhrvahjMRLVHX2L7c1Mkum3i79lNTU9jITonDYglfJI949kl9gqBOpgQrVXPNsR9mpy7LOVZ9OUCMJ86FSolmK-1oF0qQhHp3FUFQl7vHVfApiwZXVCmZ7lSlfz1IxTfvDNapjchTU3lvtx3aYBKQR1eKkQqFdwZmq3zYNx5N3prutu05JcQdmvBUcEdGFiOrapBU7Rm8gmqG0mqWDpq0jy1GMH_B4drte1-GDeAxVkP4_-GZjKhKP1tIBfwVCEXmNut42G6WdZ477aUs-YjIkmpZ2RyEramfGT3igFkDk0k0ZHL2p1s0-D-uQurvwTQKHPXR2eYLNqSNDMxs-jPbhjsFdQ2OhRqAwL3OwnZn650buAgMmtS9OjTxm4xQLkhXBJB_6mFqQ87cKJTEVlH7lbCt2CZO-PRom8";
const apiURL = "https://mock-api.bluesquad.co/missions";


function Dashboard() {


  const info = [
    {"name":"Missions Started", "dates": {"2017-01-01": 3, "2017-01-02": 4,}},
    {"name":"Missions Completed", "dates": {"2017-01-01": 5, "2017-01-02": 3,}}
  ];
const [loadingData, setLoadingData] = useState(true);
const columns = useMemo(() => [
  {
    Header: "Name",
    accessor: "data.title",
  },
  {
    Header: "Positive Cases",
    accessor: "data.start_date",
  },
]);

const [data, setData] = useState([]);

useEffect(() => {
  async function getData() {
    await axios
      .get(apiURL, { headers: {'Accept': 'application/json',
        'Content-type': 'application/json',"Authorization" : `Bearer ${accessToken}`} })
      .then((response) => {
        // check if the data is populated
        console.log(response.data);
        setData(response.data);
        // you tell it that you had the result
        setLoadingData(false);
      });
  }
  if (loadingData) {
    // if the result is not ready so you make the axios call
    getData();
  }
}, []);

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
            <div className="table"></div>
            {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <Table columns={columns} data={data} />
      )}
          </div>
    </div>
  );
}

export default Dashboard;
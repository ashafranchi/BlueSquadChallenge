import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart} from 'react-chartkick'
import 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentDots, faEnvelope, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvbzMzdzRuZmc2a2c0Nzh2ZDA1OTJkdzc5ZmkxMnFzMyIsImlzcyI6ImJsdWVzcXVhZC5jbyJ9.m8_2aasZEQPWAk0rsfuvQjJi_pqBcKBiIwYbogRtmm6gkHF3PVgyVLk6qq5vLasAz7QegnVjsXY2Q1GrCY-YpaLYZZVQ3KWMPvMN9gs9Ac3-dxaML2jeBCH5uC0F1N1SWSKUPhJJPechIfe56h8Ede4BDo34GBOFWBG_Q0GKV1ckJIgplYDyNMJt1hz_btVHdzvQ6oNpWWldq1C6xAf3uuK9uYdP9VhKAapiH10etZQWNuQFzDAoycaR2x3qdCSipb9fTdGehhrvahjMRLVHX2L7c1Mkum3i79lNTU9jITonDYglfJI949kl9gqBOpgQrVXPNsR9mpy7LOVZ9OUCMJ86FSolmK-1oF0qQhHp3FUFQl7vHVfApiwZXVCmZ7lSlfz1IxTfvDNapjchTU3lvtx3aYBKQR1eKkQqFdwZmq3zYNx5N3prutu05JcQdmvBUcEdGFiOrapBU7Rm8gmqG0mqWDpq0jy1GMH_B4drte1-GDeAxVkP4_-GZjKhKP1tIBfwVCEXmNut42G6WdZ477aUs-YjIkmpZ2RyEramfGT3igFkDk0k0ZHL2p1s0-D-uQurvwTQKHPXR2eYLNqSNDMxs-jPbhjsFdQ2OhRqAwL3OwnZn650buAgMmtS9OjTxm4xQLkhXBJB_6mFqQ87cKJTEVlH7lbCt2CZO-PRom8";
const apiURL = "https://mock-api.bluesquad.co/missions";

// This is a workaround because of time. I printed the data in the console and then wrote it here.
// The goal would be to dynamically populate it in the line chart.
const info = [
  {"name":"Missions Started", "data": {"2020-12-03T00:00:00.000Z": 1143, "2020-12-04T00:00:00.000Z": 0, "2020-12-05T00:00:00.000Z": 2712}, "2020-12-06T00:00:00.000Z": 1844, "2020-12-07T00:00:00.000Z": 1890, "2020-12-08T00:00:00.000Z": 0, "2020-12-09T00:00:00.000Z": 0, "2020-12-10T00:00:00.000Z": 0},
  {"name":"Missions Completed", "data": {"2020-12-03T00:00:00.000Z": 228, "2020-12-04T00:00:00.000Z": 0, "2020-12-05T00:00:00.000Z": 469}, "2020-12-06T00:00:00.000Z": 462, "2020-12-07T00:00:00.000Z": 545, "2020-12-08T00:00:00.000Z": 0, "2020-12-09T00:00:00.000Z": 0, "2020-12-10T00:00:00.000Z": 0}
];

function Dashboard() {

  const [stats, setStats] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get("https://mock-api.bluesquad.co/time-series/missions/all/start_mission", { headers: {'Accept': 'application/json',
          'Content-type': 'application/json',"Authorization" : `Bearer ${accessToken}`} })
        .then((result) => {
          console.log(result.data);
          setStats(result.data);
        });
    }
      getData();
  }, []);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://mock-api.bluesquad.co/time-series/missions/all/complete_mission", { headers: {'Accept': 'application/json',
          'Content-type': 'application/json',"Authorization" : `Bearer ${accessToken}`} })
        .then((result) => {
          console.log(result.data);
          setStats(result.data);
        });
    }
      getData();
  }, []);


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
      })
  }
  getData();
}, []);

console.log(stats.time);

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
            <table>
            <tbody id="content">
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th># started</th>
                    <th># completed</th>
                    <th># rejected</th>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLightbulb} /></td>
                  <td>Confirm your voter registration</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faCommentDots} /></td>
                  <td>Invite your friends to our launch</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLightbulb} /></td>
                  <td>Welcome to Blue Squad!</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faCommentDots} /></td>
                  <td>Check your friends' voter registration</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faEnvelope} /></td>
                  <td>Tell your friends about our launch event</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faCommentDots} /></td>
                  <td>Build your community</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLightbulb} /></td>
                  <td>How Blue Squad protects your data</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faCommentDots} /></td>
                  <td>Invite your friends to join Blue Squad</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLightbulb} /></td>
                  <td>Learn about ActBlue</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLightbulb} /></td>
                  <td>Grassroots money for politics</td>
                  <td>17</td>
                  <td>10</td>
                  <td>5</td>
                </tr>
            </tbody>
        </table>
      </div>
          </div>
    </div>
  );
}
export default Dashboard;
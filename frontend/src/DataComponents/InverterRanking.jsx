import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function InverterRanking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [inverterData, setInverterData] = useState([]);

  const path = `http://localhost:8000/solardb/avt-ranking/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(path);
        setInverterData(reponse.data);
      } catch (err) {
        console.error("LOI KHI GOI API: ", err);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredData = inverterData
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (sortOrder === "asc") return valA > valB ? 1 : -1;
      else return valA < valB ? 1 : -1;
    });

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "300px",
        overflow: "hidden",
        backgroundColor: "#0e1a23",
        padding: "10px",
      }}
    >
      <h3 style={{ color: "#d4bfa3", margin: "0 0 10px 0" }}>
        Inverter Ranking
      </h3>

      <input
        type="text"
        placeholder="Search"
        style={{
          width: "100%",
          padding: "8px",
          boxSizing: "border-box",
          backgroundColor: "#0e1a23",
          color: "#e0f2f1",
          border: "1px solid #1f2d3a",
          outline: "none",
          marginBottom: "8px",
          borderRadius: "6px",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ overflowY: "auto", maxHeight: "220px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "#0e1a23",
              color: "#b9c3c9",
              borderBottom: "1px solid #1f2d3a",
              zIndex: 1,
              height: "50px",
            }}
          >
            <tr>
              <th
                onClick={() => handleSort("name")}
                style={{
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "10px",
                }}
              >
                Name ↑↓
              </th>
              <th
                onClick={() => handleSort("yield")}
                style={{
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "10px",
                }}
              >
                Yield (h) ↑↓
              </th>
              <th
                onClick={() => handleSort("production")}
                style={{
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "10px",
                }}
              >
                Production (kWh) ↑↓
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? "#0e1a23" : "#11232f",
                  color: "#e0f2f1",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1e3b4a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    idx % 2 === 0 ? "#0e1a23" : "#11232f")
                }
              >
                <td style={{ padding: "10px", color: "#20a1f7" }}>
                  {item.name}
                </td>
                <td style={{ padding: "10px" }}>
                  {item.yields.toLocaleString()}
                </td>
                <td style={{ padding: "10px" }}>
                  {item.production.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default InverterRanking;

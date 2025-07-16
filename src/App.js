import React from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState("Checking...");
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://mapog.railway.app/health")
      .then((res) => res.text())
      .then((data) => setHealth(data))
      .catch(() => setHealth("❌ API not responding"));
  }, []);

  const fetchApiData = () => {
    fetch("https://mapog-msms-api-production.up.railway.app/")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch(() => setApiData({ error: "API call failed" }));
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to bottom right, #4f46e5, #3b82f6)",
      color: "#fff",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>🚀 Mapog Frontend</h1>
      <div style={{
        background: "#fff",
        color: "#000",
        borderRadius: "8px",
        padding: "20px",
        marginTop: "20px",
        width: "300px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>API Health: {health}</p>
        <button
          onClick={fetchApiData}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Fetch API Data
        </button>
        {apiData && (
          <pre style={{
            textAlign: "left",
            marginTop: "15px",
            background: "#f3f4f6",
            color: "#111827",
            padding: "10px",
            borderRadius: "5px",
            overflowX: "auto"
          }}>
            {JSON.stringify(apiData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

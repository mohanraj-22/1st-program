import { useEffect, useState } from "react";

const API_BASE = "http://localhost:8080";

export default function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch(`${API_BASE}/api/health`)
      .then((response) => response.json())
      .then((data) => setStatus(`${data.service}: ${data.status}`))
      .catch(() => setStatus("backend unavailable"));
  }, []);

  return (
    <div className="app">
      <header className="hero">
        <p className="badge">Food Delivery</p>
        <h1>Fresh meals delivered fast.</h1>
        <p className="subtitle">
          This starter stack wires a Spring Boot API with a React dashboard so you can
          keep building the full experience.
        </p>
      </header>

      <section className="card">
        <h2>Backend status</h2>
        <p>{status}</p>
        <button type="button">Create your first order</button>
      </section>
    </div>
  );
}

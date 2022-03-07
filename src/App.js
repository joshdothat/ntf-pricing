import logo from "./logo.svg";
import Pricing from "./components/Pricing";
import "./App.css";
import "./styles/style.css";
import "./styles/landing.css";
import "./styles/responsive.css";
import "./styles/loading.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 2000);
  }, [status]);

  return status ? (
    <Pricing />
  ) : (
    <div class="rocket">
      <div class="rocket-body">
        <div class="body"></div>
        <div class="fin fin-left"></div>
        <div class="fin fin-right"></div>
        <div class="window"></div>
      </div>
      <div class="exhaust-flame"></div>
      <ul class="exhaust-fumes">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="star">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LeadIntake from "./LeadIntake.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LeadIntake />
  </StrictMode>
);

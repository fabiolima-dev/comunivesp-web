import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesConfig from "./routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoutesConfig />
  </StrictMode>,
);

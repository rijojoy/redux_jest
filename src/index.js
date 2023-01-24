import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import myComponent from "./myComponent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <myComponent />
  </StrictMode>
);

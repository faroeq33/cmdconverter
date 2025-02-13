import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { convertNpmToPnpm } from "./cmd-converter.ts";

// Example usage
console.log(convertNpmToPnpm("install express"));
console.log(convertNpmToPnpm("install --save-dev webpack"));
console.log(convertNpmToPnpm("uninstall lodash"));
console.log(convertNpmToPnpm("run build"));
console.log(convertNpmToPnpm("cache clean"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

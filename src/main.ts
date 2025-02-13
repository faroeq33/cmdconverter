import { convertNpmToPnpm } from "./cmd-converter.ts";

// Example usage
console.log(convertNpmToPnpm("install express"));
console.log(convertNpmToPnpm("install --save-dev webpack"));
console.log(convertNpmToPnpm("uninstall lodash"));
console.log(convertNpmToPnpm("run build"));
console.log(convertNpmToPnpm("cache clean"));

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div>{result}</div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

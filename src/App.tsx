import { convertNpmToPnpm } from "./cmd-converter.ts";

// Example usage

function App() {
  return (
    <>
      <h1>Convert npm command to pnpm command</h1>
      <p>poop</p>
      <div>{convertNpmToPnpm("install express")}</div>
      <div>{convertNpmToPnpm("install --save-dev webpack")}</div>
      <div>{convertNpmToPnpm("uninstall lodash")}</div>
      <div>{convertNpmToPnpm("run build")}</div>
      <div>{convertNpmToPnpm("cache clean")}</div>

      <div className="card"></div>
    </>
  );
}

export default App;

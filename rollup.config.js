import typescript from "rollup-plugin-typescript2";
import scss from "rollup-plugin-scss";

import pkg from "./package.json"

 const Config = {
  input: "src/pkg/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript(), scss()],
  external: ["react", "react-dom"],
}

export default Config;
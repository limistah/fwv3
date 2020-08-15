import babel from "@rollup/plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const dist = "./dist/";
const name = "fwv3";

export default {
  input: "./src/index.js",
  output: [
    {
      file: `${dist}${name}.cjs.js`,
      format: "cjs",
    },
    {
      file: `${dist}${name}.esm.js`,
      format: "esm",
    },
    {
      name: "FocusOverlay",
      file: `${dist}${name}.js`,
      format: "umd",
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/env",
          {
            modules: false,
            targets: {
              browsers: "> 1%, IE 11, not op_mini all, not dead",
              node: 8,
            },
            useBuiltIns: "usage",
          },
        ],
      ],
    }),
    commonjs(),
    terser(),
  ],
};

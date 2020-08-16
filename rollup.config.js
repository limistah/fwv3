import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const dist = './dist/';
const name = 'fwjs';
const intro = `/* Hello */`;
const footer = `/* Hello End */`;

export default {
  input: './src/index.js',
  output: [
    {
      intro,
      footer,
      file: `${dist}${name}.cjs.js`,
      format: 'cjs'
    },
    {
      intro,
      footer,
      file: `${dist}${name}.esm.js`,
      format: 'esm'
    },
    {
      intro,
      footer,
      name: 'FocusOverlay',
      file: `${dist}${name}.js`,
      format: 'umd'
    }
  ],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            targets: {
              browsers: '> 1%, IE 11, not op_mini all, not dead',
              node: 8
            },
            useBuiltIns: 'usage',
            corejs: '3'
          }
        ]
      ]
    }),
    commonjs(),
    terser()
  ]
};

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import nodeGlobals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import minify from 'rollup-plugin-babel-minify';
import filesize from 'rollup-plugin-filesize';
import postcssModules from 'postcss-modules';
import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV || "development";

const cssExportMap = {};

const file = NODE_ENV === "production"
  ? "./dist/prod.js"
  : "./dist/dev.js";

const fileMod = NODE_ENV === "production"
  ? "./dist/prod.module.js"
  : "./dist/dev.module.js";

// options
const input = './src/lib/index.js';
const name = pkg.name;
const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
};

const external = [
  'react',
  'react-dom'
];

const babelOptions = {
  exclude: 'node_modules/**',
  babelrc: true,
  "plugins": [
    "external-helpers"
  ]
};

const commonjsOptions = {
  ignoreGlobal: true,
  include: 'node_modules/**',
};

// config
export default {
  input,
  output: [
    {
      external,
      file,
      format: 'umd',
      globals,
      name
    },
    {
      external,
      file: fileMod,
      format: 'es',
      globals,
      name
    }
  ],
  external: Object.keys(globals),
  plugins: [
    resolve(),
    postcss({
      modules: {
        camelCase: true
      }
    }),
    commonjs(commonjsOptions),
    nodeGlobals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    babel(babelOptions),
    (process.env.NODE_ENV === 'production' && minify()),
    filesize()
  ],
}

import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import dts from "rollup-plugin-dts";
import postCSS from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const config =  [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      del({ targets: 'dist' }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postCSS({
        plugins: [
          require('tailwindcss'),
          require('autoprefixer')
        ],
      }),
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm'
      }
    ],
    external: [/\.css$/, /\.scss$/ ],
    plugins: [dts()]
  }
]

export default config
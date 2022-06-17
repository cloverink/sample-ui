import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postCSS from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

const config = {
  input: 'src/components/lib.ts',
  output: [
    {
      file: './lib/cjs/index.js',
      format: 'cjs',
    },
    {
      file: './lib/esm/index.js',
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    del({ targets: 'lib/*' }),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        exclude: [
          '**/__tests__',
          '**/__e2e__',
          '**/*.test.ts',
          '*.config.*'
        ]
      }
    }),
    postCSS({
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ],
    }),
  ],
};

export default config
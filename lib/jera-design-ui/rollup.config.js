import typescript2 from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external';
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import tsConfig from './tsconfig.json'

export default {
  input: [
    'src/index.ts',
    'src/init.ts'
  ],
  output: {
    format: 'cjs',
    dir: tsConfig.compilerOptions.outDir,
    sourcemap: true,
  },
  plugins: [
    external(),
    typescript2({
      tsconfig: "tsconfig.json",
    }),
    nodeResolve(),
    commonjs(),
  ],
}

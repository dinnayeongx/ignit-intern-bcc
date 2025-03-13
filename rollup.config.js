import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    typescript(), 
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
  ],
};

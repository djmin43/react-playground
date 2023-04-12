import { babel} from '@rollup/plugin-babel'

const config =  {
    input: 'src/index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'esm',
    },
    external: [/@babel\/runtime/],
    plugins: [babel({babelHelpers: 'runtime'})]

}

export default config;
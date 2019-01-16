import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default {
    input: 'src/index.jsx',
    moduleName: 'components',
    sourceMap: true,
    output: [
        {
            file: 'dist/index.js',
            format: 'umd',
            name: 'index'
        }
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.json'],
        }),
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react'],
        }),
    ],
    external: ['react', 'react-dom'],
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
}
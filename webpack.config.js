import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
    entry: './src/index.tsx', // 리액트 애플리케이션 진입점 파일
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // TypeScript 파일 확장자 지원
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // .tsx와 .ts 파일을 처리하기 위한 로더 설정
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
};

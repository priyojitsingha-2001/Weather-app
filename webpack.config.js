const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')  // Set the output path to the 'bundle' folder
    },
    plugins: [
        new Dotenv()
    ]
};

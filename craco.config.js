const path = require("path")

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    style: {
        modules: {
            localIdentName: ""
        },
        css: {
            test: /\.css$/i,
                loader: "css-loader",
            loaderOptions: {
                
            }
        },
        sass: {
            test: /\.s[ac]ss$/i,
            loader: "sass-loader",
            loaderOptions: {
               
            },

        },
       
    },
    //配置别名
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
        }
    }
}
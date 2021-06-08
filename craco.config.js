const path = require("path")
const resolve = dir => path.resolve(__dirname, dir)
const pxtovw = require("postcss-px-to-viewport")
const autoprefixer = require("autoprefixer")
const WebpackBar = require('webpackbar');

const CracoLessPlugin = require('craco-less');
const os = require('os');


const getNetworkIp = () => {
    let needHost = ''; // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces();
        for (let dev in network) {
            let iface = network[dev];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    needHost = alias.address;
                }
            }
        }
    } catch (e) {
        needHost = 'localhost';
    }
    return needHost;
}

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */ ,
    style: {
        modules: {
            localIdentName: "craco"
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
        postcss: {
            mode: "extends" /* (default value) */ || "file",
            plugins: [

                autoprefixer,
                pxtovw({
                    unitToConvert: "px", // 需要转换的单位，默认为"px"
                    viewportWidth: 1920, // 视窗的宽度，对应pc设计稿的宽度，一般是1920
                    // viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度
                    unitPrecision: 3, // 单位转换后保留的精度
                    propList: [
                        // 能转化为vw的属性列表
                        "*",
                    ],
                    viewportUnit: "vw", // 希望使用的视口单位
                    fontViewportUnit: "vw", // 字体使用的视口单位
                    selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。cretae
                    minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                    mediaQuery: false, // 媒体查询里的单位是否需要转换单位
                    replace: true, // 是否直接更换属性值，而不添加备用属性
                    exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
                }),
            ],

            loaderOptions: {

            },

        }

    },

    babel: {
        presets: [
            [
                "@babel/preset-env"
            ],
            ["@babel/preset-react"]
        ],
        plugins: [
            // AntDesign 按需加载
            ['import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
            }, 'antd'],
            ['@babel/plugin-proposal-decorators', {
                legacy: true
            }], // 用来支持装饰器
            [
                "@babel/plugin-transform-runtime",
                {
                    "useESModules": true,
                    "regenerator": true
                }
            ],
            ["@babel/plugin-proposal-class-properties"]
        ],
        loaderOptions: {
            /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
        },

    },
    devServer: {
        publicPath: '/',
        host: getNetworkIp(),
        port: 8000,
        hot: true,
        overlay: true,
        proxy: {
            '/api': {
                target: 'https://m.weibo.cn',
                changeOrigin: true,
                logLevel: 'debug',
                headers: {
                    Cookie: ''
                }
            }
        },
    },
    //配置别名
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
        },
        plugins: [
            new WebpackBar({
                profile: true,
                name: 'webpack',
                color: 'green'
            }),
        ]
    },
    plugins: [{
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A'
                        }, //不修改主题就注释掉这行
                        javascriptEnabled: true,
                    },
                },
            },

        },
       
    ]

}
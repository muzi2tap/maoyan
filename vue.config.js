const path = require("path")

module.exports = {
    publicPath:"./",
    devServer: {
        proxy: {
            "/api": {
                target: "http://39.97.33.178",
                changeOrigin: true
            },
            "/ajax":{
                target:"http://m.maoyan.com",
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                "@assets": path.join(__dirname, "./src/assets"),
                "@common": path.join(__dirname, "./src/common"),
                "@components": path.join(__dirname, "./src/components"),
                "@pages": path.join(__dirname, "./src/pages"),
                "@router": path.join(__dirname, "./src/router"),
                "@store": path.join(__dirname, "./src/store"),
                "@utils": path.join(__dirname, "./src/utils"),
                "@api": path.join(__dirname, "./src/api"),
            }
        }
    }
}
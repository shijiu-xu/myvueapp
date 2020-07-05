module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://maoyan.com",
                changeOrigin: true
            },
            "/capi": {
                target: "https://mapi.eyee.com",
                changeOrigin: true
            },
            "/sh":{
                target:"https://api1.34580.com",
                changeOrigin:true
            }
        }
    }
}

// https://maoyan.com/board/4
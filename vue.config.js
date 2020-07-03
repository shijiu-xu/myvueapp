module.exports = {
    devServer:{
        proxy:{
            "/api":{
               target:"https://m.maoyan.com",
                secure:false,
                changeOrigin:true
               
            }
        }
    }
}

 //   https://hotel.jd.com/api/json/getRecommendHotelList?cityId=36&_=1593751867071

 // https://m.maoyan.com/ajax/filterCinemas  https://dujia.jd.com/api/scenic/getLvpaiConfig
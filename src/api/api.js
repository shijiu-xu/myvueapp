import http from "@/utils/http.js"

 // 酒店页面
 export const getNowMovie = ()=> http("get","/api/ajax/cinemaDetail?cinemaId=15421")


//   //   https://hotel.jd.com/api/json/getRecommendHotelList?cityId=36&_=1593751867071
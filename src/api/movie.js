import http from "@utils/request";

export const movienowApi=(cityId=10)=>http({
    method:"get",
    url:"api/movieOnInfoList",
    data:{
        cityId:cityId
    }
})

export const moviecommingApi=(cityId=10)=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:cityId
    }
})
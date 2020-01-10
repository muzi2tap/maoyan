import http from "@utils/request";

/* 
    @params cityId:城市Id
    接口:正在热映
 */
export const movienowApi=(cityId=10)=>http({
    method:"get",
    url:"api/movieOnInfoList",
    data:{
        cityId:cityId
    }
})

/* 
    @params cityId:城市Id
    接口:即将上映
 */
export const moviecommingApi=(cityId=10)=>http({
    method:"get",
    url:"/ajax/comingList",
    data:{
        ci:cityId,
        token:""
    }
})

/* 
    @params movieId:电影Id
    接口:电影详情
 */
export const movieDetailApi=(movieId)=>http({
    method:"get",
    url:"/ajax/detailmovie",
    data:{
        movieId
    }
})
import {cityApi} from "@api/city";
let state ={
    hotCity:JSON.parse(sessionStorage.getItem("hotCity"))||[],
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    nm:"北京",
    cityId:1
}

let actions={
    async handleGetCityList({commit}){
        let data=await cityApi();
        commit("handleCityList",data.data.cities)
    }
}

let mutations={
    handleCityList(state,cities){
        console.log(cities)
        let hotCity=[],cityList=[];
        /* 
            hotcity = [
                {
                    id:"",
                    name:""
                }
            ]

            cityList = [
                {
                    index:"A",
                    list:[
                        {
                            id:"",
                            nm:""
                        }
                    ]
                },
                {
                    index:"B",
                    list:[
                        {
                            id:"",
                            nm:""
                        }
                    ]
                }
            ]
            
         */

        //  热门城市
        for(var i=0;i<cities.length;i++){
            if(cities[i].isHot==1){
                hotCity.push({id:cities[i].id,nm:cities[i].nm});
            }
        }
        
        // 城市列表
        for(var i=0;i<cities.length;i++){
            let letterFirst=cities[i].py.slice(0,1).toUpperCase();
            if(isCityList(letterFirst)){
                // 不存在
                cityList.push({index:letterFirst,List:[{id:cities[i].id,nm:cities[i].nm}]})
            }else{
                // 不存在
                for(var j=0;j<cityList.length;j++){
                    if(cityList[j].index==letterFirst){
                        cityList[j].List.push({id:cities[i].id,nm:cities[i].nm})
                    }
                }
            }
        }

        // 判断城市标识是否在cityList中存在
        function isCityList(letterFirst){
            var bStop=true;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index==letterFirst){
                    bStop=false;
                    break;
                }
            }
            return bStop;
        }

        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })

        state.hotCity=hotCity;
        state.cityList=cityList;

        sessionStorage.setItem("hotCity",JSON.stringify(hotCity));
        sessionStorage.setItem("cityList",JSON.stringify(cityList));
    }
}

let getters={

}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
}
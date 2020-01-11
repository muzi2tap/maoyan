export const throttle=(function(){
    let firsttime=0;
    return function(callback,time=300){
        let lasttime=new Date().getTime();
        if(lasttime-firsttime>time){
            callback();
            firsttime=lasttime;
        }
    }
})()
//es6
export default (params)=>{
    return new Promise((resolve,reject)=>{
        // 加载效果
        uni.showLoading({
            title:"加载中"
        })
        wx.request({
            // 解构
            ...params,
            success(res){
                resolve(res);
            },
            fail(err){
                reject(err);
            },
            complete(){
                 uni.hideLoading(); 
            }
        })
    })
}
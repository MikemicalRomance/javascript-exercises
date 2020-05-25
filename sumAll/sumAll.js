const sumAll = function(int1,int2) {
    
    if (int1<0 || int2<0){
        return 'ERROR'
    }
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) { 
        return 'ERROR'
     }

    let sum = 0 
    let largerInt = Math.max(int1,int2)
    let smallertInt = Math.min(int1,int2)

    if (Number.isInteger(int1) && Number.isInteger(int2)){
        for (let i = smallertInt;i<=largerInt;i++){
        sum+=i
        } 
        return sum    
    }    
    
}

  

module.exports = sumAll
sumAll(1,4)
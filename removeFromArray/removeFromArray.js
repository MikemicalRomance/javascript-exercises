const removeFromArray = function(array,...moreargs) {
 //let indexOfArgToRemv= array.lastIndexOf(moreargs)

 moreargs.forEach((el)=> {

    if (array.includes(el)){

        let indexOfArgToRemv= array.lastIndexOf(el)
        console.log(indexOfArgToRemv)
        return array.splice(indexOfArgToRemv,1)
    }
} )

 //array.splice(indexOfArgToRemv,1)
 console.log(array)
 console.log(moreargs)
 
 return array

}

module.exports = removeFromArray
//removeFromArray([6,5,2,3,9,11,21,2,1],2,21,6)

const reverseString = function(string) {
    let revStr =''
    let i =(string.length-1)
    console.log('this is i',i)
    for (i;i>=0;i--){
        revStr += string[i]
        console.log('i on loop iteration',i)
    }
    console.log(revStr)
    return revStr
}

module.exports = reverseString

reverseString('hannah')
const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit- 32)*5/9
  console.log(Math.round(celsius*100)/100)
  function round(celsius) {
    return (celsius >= 0 || -1) * Math.round(Math.abs(celsius)*10)/10;
  }
  return round(celsius)
  //return Math.round(celsius) 
}

const ctof = function(celsius) {
  let fahrenheit = celsius*9/5 + 32
  console.log(Math.round(fahrenheit*100)/100)

  function round(fahrenheit) {
    return (fahrenheit >= 0 || -1) * Math.round(Math.abs(fahrenheit)*10)/10;
  }
  return round(fahrenheit)

  //return Math.round(fahrenheit)

}

module.exports = {
  ftoc,
  ctof
}
ftoc(32)
//ftoc(3) // fahrenheit to celsius, should return 0
ctof(2)
//ctof(0) // celsius to fahrenheit, should return 32

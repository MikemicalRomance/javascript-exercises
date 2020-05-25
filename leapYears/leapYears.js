const leapYears = function (year) {
    let yearNo = parseInt(year)
    console.log(yearNo % 4)

    if (yearNo % 100== 0 && yearNo % 400 !== 0) {
        console.log('False')
        return false //"this is NOT a leap year"
    }
    if (yearNo % 400 == 0 || yearNo % 4 == 0) return true//'This IS a leap year'



    else {
        console.log('false')
        return false //"this is NOT a leap year"
    }



}

module.exports = leapYears

leapYears(1900)
//leapYears(2004)
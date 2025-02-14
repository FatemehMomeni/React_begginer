const validateSubject = (subject) => subject.length > 8;

// function convertToEnglishNumber(input){
//     return input.replace(/[\u06F0-\u06F90]/g, function(m){
//         return persianDigits.indexOf(m);
//     });
// }
function convertToPersianNum(number){
    var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    var persianMap = persianDigits.split("");
    let strNumber = number.toString();

    return strNumber.replace(/\d/g,function(m){
        return persianMap[parseInt(m)];
    });
}
  
export { validateSubject, convertToPersianNum };
// Yozuvni teskari chiqarish
// var str = "QUVONCHBEK"
// function reversestr(str) {
//     str = str.split("").reverse();
//     return str.join(" ");
// }
// var res = reversestr(str);
// console.log(res);

// Kabis yili
// function leapyear(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         console.log(true);
//     } else {
//         console.log(false)};
// }
// leapyear(2016);
// leapyear(2012);
// leapyear(2014);
// leapyear(1800);
// leapyear(2100);

// 1998-2100 yy T.K. yakshanba soni
// var time = new Date("1998-05-09");
// var n = 0;
// for (var i = 1998; i <= 2100; i++) {
//     var time = new Date(i + "-05-09");
//     if (time.getDay() === 0) {
//         n = n + 1;
//     };
// }
// console.log(n);

// randomazer
// var randnum = Math.random();
// console.log(randnum);


// var time = Date.now();
// console.log(time);


// function returnn(item) {
//    if (item % 3 === 0 && item % 5 === 0){
//         return "fizz-fuzz";
//     } if (item % 3 === 0) {
//         return "fizz";
//     }  if (item % 5 === 0) {
//         return "fuzz";
//     } 
// }
// console.log(returnn(15));


function rasxod(s,b,r) {
    var masofa = (r[1]*b)/r[0];
    // 4l == 50km
    // 40l == xkm
    if(masofa - s >= 0) return "yetadi"
    return "yetmaydi";
}
console.log(rasxod(60, 40, [4, 50] ));

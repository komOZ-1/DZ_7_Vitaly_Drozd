//задание №2
console.log('Задание2');
var a1 = 5 % 3,
a2 = 3 % 5,
a3 = 5 + '3',
a4 = '5' - 3,
a5 = 75 + 'кг',
a6 = 785*653,
a7 = 100/25,
a8 = 0*0,
a9 = 0/2,
a10 = 89/0,
a11 = 98+2,
a12 = 5-98,
a13 = (8+56*4)/5,
a14 = (9-12)*7/(5+2),
a15 = +'123',
a16 = 1 || 0,
a17 = false || true,
a18 = true > 0;
console.log('1)',a1, typeof a1);
console.log('2)',a2, typeof a2);
console.log('3)',a3, typeof a3);
console.log('4)',a4, typeof a4);
console.log('5)',a5, typeof a5);
console.log('6)',a6, typeof a6);
console.log('7)',a7, typeof a7);
console.log('8)',a8, typeof a8);
console.log('9)',a9, typeof a9);
console.log('10)',a10, typeof a10);
console.log('11)',a11, typeof a11);
console.log('12)',a12, typeof a12);
console.log('13)',a13, typeof a13);
console.log('14)',a14, typeof a14);
console.log('15)',a15, typeof a15);
console.log('16)',a16, typeof a16);
console.log('17)',a17, typeof a17);
console.log('18)',a18, typeof a18);
//задание №4
console.log('Задание4');
var HCilindra = 10,
    VCilindra = (3.14 * Math.pow(a7, 2) / 4) * HCilindra;
console.log('Объем цилиндра', VCilindra, 'м3');
//задание №3
console.log('Задание 3');
var width = 23,
    height = 10,
    SPryam = width * height;
console.log('Площадь прямоугольника', SPryam, 'см2');
//Задание №5
console.log('Задание 5');
 var r = 5,
    SKruga = (3.14 * Math.pow(r, 2));
console.log('Площадь круга', SKruga, 'см2');
//Задание №6
console.log('Задание 6');
var a = 5,
    b = 7,
    h = 10,
    STrap = ((a + b) / 2) * h;
console.log('Площадь трапеции', STrap, 'см2');
//Задание №7
console.log('Задание 7');
var s = 2000000,
    p = 0.1,
    years = 5,
    Pereplata = (s * p * years);
console.log('Переплата по кредиту', Pereplata, 'руб');
//Задание №8
console.log('Задание 8');
let x,
    aUr = 8,
    bUr = 3;

x = (16 + 2 * bUr - aUr)/2;
console.log('1)',x);

x = (aUr - 15 * bUr) / (bUr - 6);
console.log('2)',x);

x = 23780 / (1 + 2 + aUr + bUr);
console.log('3)',x);



"use strict";
const paper=15.678;

const metal=123.965;

const glass=90.2345;

document.writeln("Максимальна ціна:"+Math.max(paper,metal,glass));

document.writeln("<br>Мінімальна ціна:"+Math.min(paper,metal,glass));

const sum=paper+metal+glass;

document.writeln("<br>Вартість всіх товарів"+sum);

const roundedPaper=Math.floor(paper);

const roundedMetal=Math.floor(metal);

const roundedGlass=Math.floor(glass);

const roundedsum=Math.round(sum/100)*100;

const sumSmall=roundedPaper+roundedMetal+roundedGlass;

if (Math.floor(sumSmall) % 2 == 0) {
    document.writeln("<br>Парне число:"+sumSmall);
} else {
    document.writeln("<br>Не парне число:"+sumSmall);
}

const rest=500-sum;

document.writeln("<br>Решта:"+rest);

document.writeln ("<br>Сума заукруглена до сотих:"+sum.toFixed (2))

const  discount= Math.random() *(25-5) + 5;

const payment=discount/100*sum;

const check=sum-payment;

document.writeln ("<br>До оплати:"+check.toFixed (2))

const cost=sum/2;

const netProfit=check-cost

document.writeln ("<br>Чистий прибуток:"+netProfit.toFixed (2))


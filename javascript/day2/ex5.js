const money = new Array(3);
money[0]=5;
money[1]=7;
money[2]=-3;
var sum = 0;
for (i=0; i<money.length; i++) { sum += money[i]; }

console.log(sum/money.length);
const a = 10;
if (a == 10) {
  console.log("a = 10");
}

const b = "25";
if (b == 25) {
  console.log("b = 25");
}

const c = 9;
if (c === 9) {
  console.log('c = 9');
}

const d = '35';
if (d === 35) {
  console.log('b = 35');
}

console.log('I´m outside if, who compares string.');

const s ='2';
if (s === 2) console.log('s is the number 10');

else {
  console.log ('Result: ${s ===10}');
  console.log ('It is not a numeral.');
}

console.clear();

const f = 450;
const g = 555;

if (f > 450 || g > 555){
  console.log('Condition is ${ (f > 450 || g > 555}');
  console.log('f is bigger than 450 or g is bigger than 555');}

  else
  console.log('f is not bigger than 450 or g is bigger than 555');
if (f > 450 && g > 555)console.log('f is smaller than 450 and g is bigger than 555');

else{
  console.log('The condition is ${f > 450 && g > 555}');
  console.log('f is not bigger than 450 or g is not bigger than 555');}
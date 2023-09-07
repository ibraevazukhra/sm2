// let a = 555;
// let message = 'text message';
// console.log(a);
// console.log(message);

// let x = 10;
// let y = 2;
// console.log(x+y)
// console.log(x/y)


// alert('message');
// let password = prompt('введите пароль');
// password = Number(password);
// console.log(password);

// // confirm('Вы уверены?')

// let sure = confirm('Вы уверены?')
// console.log(sure);
// alert('text' + password + 'text2')


let city = prompt('Введите название города');
let year = prompt('Введите год образования города');
let population= prompt('Введите население города');
let now = 2023;
year = Number(year);
console.log(now-year);
age = now - year;
alert('Городу ' + city + ' исполнилось ' + age + ' лет с момента появления. ' + 'Население - ' + population + ' человек');
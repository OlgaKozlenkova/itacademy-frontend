//task1
alert('task1');
var name, admin;
name = 'Василий';
admin = name;
alert(admin);

//task2
alert('task2');
var a = prompt('Введите число');
if (a > 0) {
    alert('Значение больше нуля');
} else if (a < 0) {
    alert('Значение меньше нуля');
} else {
    alert('Значение равно нулю');
}

//task3
alert('task3');
var login = prompt('Введите логин'),
    adm = 'Админ';
if (login == adm) {
    var pass = prompt('Введите пароль');
    if (pass == '123321') {
        alert('Добро пожаловать!');
    } else if (pass == null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }
} else if (login == null) {
    alert('Вход отменён');
} else {
    alert('Пользователь не найден')
}

//task4
alert('task4');
var age = prompt('Введите возраст');
console.log('age');
if (age >= 14 && age <= 90) {
    alert('Ваш возраст = ' + age);
} else {
    alert('Ваш возраст не подходит');
}

//task5
alert('task5');
var result = [];
for (var i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        result.push(i);
    }
}
alert(result);

//task6
alert('task6');
while (true) {
    var ask = prompt('Ввести число, большее 100');
    if (ask > 100 || ask == null) {
        alert('Ввод успешен!')
        break;
    }
}

//task7
alert('task7');
var a = prompt ('enter a = '),
    b = prompt ('enter b = '),
    result = a + b < 4 ? 'Мало' : 'Много';
alert(result);

//task8
alert('task8');
var i=0;
while (i < 3) {
    alert( "номер " + i + "!" );
    i++;
}

//task9
alert('task9');
var browser = prompt('Введите название браузера');
if (browser == 'IE') {
    alert('О, да у вас IE!');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}

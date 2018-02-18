//task1
var styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-Ролл');
console.log(styles);
styles.splice(1, 1, 'Классика');
console.log(styles);
console.log(styles.shift('Джаз'));
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);

//task2
function lastnumber() {
    var mass = [1, 4, 5, 6, 7, 8, 9, 3];
    console.log(mass.pop());
}
lastnumber();

//task3
var array = [],
    sum = 0;
while (true) {
    var a = prompt('Введите число');
    if (a == null || isNaN(a) || a == '') {
        break;
    } else {
        array.push(+a);
    }
}
console.log(array);
array.forEach(function (item, i) {
    sum = sum + item;
})
console.log(sum);

//task4
function find(array, value) {
    return array.indexOf(value);
}
console.log(find([1, 2, 3, 4, 6, 'the', 'end', 'month'], 9));

//task5
var obj = {
    className: 'menu open'
};

function addClass(obj, cls) {
    var array = obj.className.split(' ');
    console.log(array.indexOf(cls));
    if (array.indexOf(cls) == -1) {
        obj.className = obj.className + ' ' + cls;
    }
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log(obj);

//task6
var obj = {
    className: 'open menu'
};

function removeClass(obj, cls) {
    var array = obj.className.split(' ');
    console.log(obj.className.indexOf(cls));
    if (array.indexOf(cls) > -1) {
        obj.className = obj.className.replace(cls, '');
    }
}
removeClass(obj, 'open');
removeClass(obj, 'blabla');
console.log(obj);

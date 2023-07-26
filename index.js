// Массивы это объекты с цифровыми именами свойств
// Пример создания массива:

const myArray = [1, 2, 3]
    console.log(myArray)

// В массиве можно сохранять разнве значения (строки,цифры и т.д.)

const myArray1 = [1, true, 'Rinat']
    console.log(myArray1)

// Свойство length паказывает длинну массива

console.log(myArray1.length)

// Если создать второй массив с такими же данными то они не будут равны так как занимают разную часть в памяти

const myArray2 = [1, true, 'Rinat']

myArray1 === myArray2   // Будет false в результате

// Если прировнять один массив к другому то при сравнении будет true

const myArray3 = myArray

myArray === myArray3
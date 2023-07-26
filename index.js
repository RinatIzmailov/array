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

const myArray3 = myArray   // Объект скопирован по ссылке

myArray === myArray3

                                // Чтение значений массива

const myArray4 = [1, true, 'Rinat']
    console.log(myArray4)

// Если свойства у объекта цифровые (а в массиве так и есть, с 0 по длинне массива) то НЕЛЬЗЯ использовать точечную запись

console.log(myArray4[0])
console.log(myArray4[2])

// Чтобы получить длинну массива используем "length"

console.log(myArray4.length)

// Можно менять значение элемента внутри массива:

// Имеется массив

const myArray5 = [1, 2, 3]
    console.log(myArray5)
    console.log(myArray5.length)

// Указав после названия массива номер элемента и присвоить ему новое значение

myArray5[2] = 'QWERTY' 
    console.log(myArray5) // на выходе будет [1, 2, 'QWERTY]

// Можем добавлять новый элемент в конец массива

myArray5[3] = 'true' 
    console.log(myArray5)
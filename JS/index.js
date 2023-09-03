// Button
var inputBtn = document.getElementById('input__btn');
var sumBtn = document.getElementById('sum_btn');
var countPositiveBtn = document.getElementById('count-positive_btn');
var minNumberBtn = document.getElementById('min-number_btn');
var minPositiveBtn = document.getElementById('min-positive_btn');
var lastEvenNumberBtn = document.getElementById('last-even-number_btn');
var changePositionBtn = document.getElementById('change-position_btn');
var sortBtn = document.getElementById('sort_btn');
var primeBtn = document.getElementById('prime_btn');
var floatBtn = document.getElementById('float__btn');
var countIntegerBtn = document.getElementById('integer__btn');
var compareBtn = document.getElementById('compare_btn');

// ---------------------------------------------------------------------------

//Function check positive
function checkPositive(arr) {
    let positive = arr.filter(function (n) {
        return n > 0;
    });

    return positive;
}

//Function check negative
function checkNegative(arr) {
    let negative = arr.filter(function (n) {
        return n < 0;
    });

    return negative;
}

//Function total positive number
function totalPositiveNumber(arr) {
    let sum = 0;
    let sumArr = checkPositive(arr);

    sumArr.forEach(function (n) {
    sum += n;
    });

    return sum;
}

//Function count positive number
function countPositiveNumber(arr) {
    return (count = checkPositive(arr).length);
}

//Function count negative number
function countNegativeNumber(arr) {
    return (count = checkNegative(arr).length);
}

//Function find min number
function findMinNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//Function find the last even number
function lastEvenNumber(n) {
    if (n > 0 && n % 2 === 0) {
        return n;
    }
    return false;
}

//Function change position
function changePosition(arr) {
    let firstPosition = document.getElementById('first-position').value * 1;
    let secondPosition = document.getElementById('second-position').value * 1;

  if (
    firstPosition < arr.length &&
    secondPosition < arr.length &&
    firstPosition >= 0 &&
    secondPosition >= 0
  ) {
    let firstValue = arr[firstPosition];
    let secondValue = arr[secondPosition];

    arr.splice(firstPosition, 1, secondValue);
    arr.splice(secondPosition, 1, firstValue);
  } else {
    alert('Dữ liệu không hợp lệ');
  }
  return arr;
}

//Function sort in ascending
function sortAscending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

//Function check prime number
function checkPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (i = 2; i < n; i++) {
        if (n % 2 == 0) {
        return false;
    }
  }
    return true;
}

//Function check integer number
function checkInteger(n) {
    return Number.isInteger(n);
}

// ------------------------------------------------------------------

// Array input
var inputArr = [];

inputBtn.addEventListener('click', function () {
    let inputNumber = document.getElementById('input__number').value * 1;

    inputArr.push(inputNumber);

    document.querySelector('.input__result #result').innerHTML = inputArr;
    document.getElementById('input__number').value = '';
});

//Array float
var floatArr = [];

floatBtn.addEventListener('click', function () {
    let floatNumber = document.getElementById('float__number').value * 1;

    floatArr.push(floatNumber);

    document.querySelector('.float-result #result').innerHTML = floatArr;
    document.getElementById('float__number').value = '';
});

// -----------------------------------------------------------------------

// Positive total
sumBtn.addEventListener('click', function () {
    document.querySelector('.sum__result #result').innerHTML = totalPositiveNumber(inputArr);
});

// Count positive
countPositiveBtn.addEventListener('click', function () {
    if (countPositiveNumber(inputArr) > 0) {
        document.querySelector('.count-positive__result #result').innerHTML = `${countPositiveNumber(
        inputArr
    )} số`;
    } else {
        document.querySelector('.count-positive__result #result').innerText =
        'Không có số nguyên dương';
    }
});

//Find min number
minNumberBtn.addEventListener('click', function () {
    if (findMinNumber(inputArr) !== undefined) {
        document.querySelector('.min-number__result #result').innerHTML = findMinNumber(inputArr);
    } else {
        document.querySelector('.min-number__result #result').innerText = 'Không có số nhỏ nhất';
    }
});

//Fin min positive number
minPositiveBtn.addEventListener('click', function () {
    let min = checkPositive(inputArr);
    if (min.length > 0) {
        document.querySelector('.min-positive__result #result').innerHTML = findMinNumber(min);
    } else {
        document.querySelector('.min-positive__result #result').innerText =
        'Không có số nguyên dương nhỏ nhất';
    }
});

//Find the last even number
lastEvenNumberBtn.addEventListener('click', function () {
    let evenArr = inputArr.filter(lastEvenNumber);
    if (evenArr.length > 0) {
        document.querySelector('.last-even-number__result #result').innerHTML = evenArr.slice(-1);
    } else {
        document.querySelector('.last-even-number__result #result').innerText = 'Không có số chẵn';
    }
});

//Change position
changePositionBtn.addEventListener('click', function () {
    document.querySelector('.change-position__result #result').innerHTML = changePosition(inputArr);
});

//Sort in ascending order
sortBtn.addEventListener('click', function () {
    document.querySelector('.sort__result #result').innerHTML = sortAscending(inputArr);
});

//Find the first prime number
primeBtn.addEventListener('click', function () {
    if (inputArr.filter(checkPrime)[0] !== undefined) {
        document.querySelector('.prime__result #result').innerHTML = inputArr.filter(checkPrime)[0];
    } else {
        alert('Dữ liệu không hợp lệ');
    }
});

//Count integer
countIntegerBtn.addEventListener('click', function () {
    document.querySelector('.integer__result #result').innerHTML = `${
    floatArr.filter(checkInteger).length
    } số`;
});

//Compare positive and negative
compareBtn.addEventListener('click', function () {
    let positiveNumber = countPositiveNumber(inputArr);
    let negativeNumber = countNegativeNumber(inputArr);

    if (positiveNumber > negativeNumber) {
        document.querySelector('.compare__result #result').innerText = 'Số dương > Số âm';
    } else if (positiveNumber < negativeNumber) {
        document.querySelector('.compare__result #result').innerText = 'Số dương < Số âm';
    } else {
        document.querySelector('.compare__result #result').innerText = 'Số dương = Số âm';
    }
});

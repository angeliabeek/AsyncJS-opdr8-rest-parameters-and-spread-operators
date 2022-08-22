// Function 1
const sum1 = (...numbers) => {
    return numbers.reduce((previous, current) => previous + current);
};
console.log(sum1(1, 2, 3, 4, 5));

// Function 2
const array1 = [1, 2, 3];
const sum2 = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
console.log(sum2(...array1));
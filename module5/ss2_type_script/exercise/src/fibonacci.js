function displayFibonacci(number) {
    var sum = 1;
    var arr = [0, 1];
    while (number > arr.length) {
        var total = 0;
        total = arr[arr.length - 2] + arr[arr.length - 1];
        sum = sum + total;
        arr.push(total);
    }
    return arr.toString() + " Tổng là:" + sum;
}
console.log(displayFibonacci(8));

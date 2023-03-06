function displayFibonacci(number:number):string  {
    let sum:number = 1;
    let arr = [0,1];
    while (number>arr.length){
        let total = 0;
        total = arr[arr.length-2] + arr[arr.length - 1]
        sum = sum + total
        arr.push(total)
    }
    return arr.toString() + " Tổng là:" + sum
}
console.log(displayFibonacci(8))

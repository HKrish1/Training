function binarySearch(arr, x, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return true;
    else if (arr[mid] > x) 
        return binarySearch(arr, x, start, mid-1);
    else
        return binarySearch(arr, x, mid+1, end);
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let x = 5;
let result = binarySearch(arr, x, 0, arr.length-1);
if (result) {
    console.log(x + " found in the array.");
} else {
    console.log(x + " not found in the array.");
}

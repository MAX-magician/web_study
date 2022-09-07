var arr = [35, 23, 26, 81, 14, 36, 56];
for (var i = 0; i < (arr.length-1); i++) {
    for (var j = 0; j < (arr.length-1-i); j++) {
        if (arr[j] > arr[(j+1)]) {
            var aa = arr[j];
            arr[j] = arr[(j+1)];
            arr[j+1] = aa;
        }
    }
}
console.log(arr);
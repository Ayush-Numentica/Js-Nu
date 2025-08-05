let arr = [3, 5, 9, 2, 7]


function swap(arr) {
    let temp = 0

    if (arr.length > 1) {
        temp = arr[0]
        arr[0] = arr[arr.length-1]
        arr[arr.length-1] = temp
    }
    return arr

}



console.log(swap(arr))
const arr = [0, 1,0 , 0 , 1];

function countZeroes(array) {
    let count = 0;
    for (let i = 0 ; i < arr.length; i++) {
        if(arr[i] == 0) {
            count++;
        }
    }

    return count;
}


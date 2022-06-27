const last_digit = (num) => {
    let rem = num % 10;
    return rem;
}

const first_digit = (num) => {
    while (num >= 10) {
        num /= 10;
    }
    return parseInt(num);
}

const Triangle_Check = (A,B,C) => {
    if (A > 90 || B > 90 || C > 90) {
        return 'obtuse';
    } else {
        return 'acute';
    }
};

const Find_Digits = (num) => {
    let count = 0;
    while (num > 0) {
    num = parseInt(num / 10);
    count++;
    }
    return count;
};

const Find_Five = (num) => {
    let count = 0;
    while (num > 0) {
        let rem = num % 10;
        if (rem == 5) {
            count++;
        }
        num = parseInt(num / 10);
    }
    return count;
};

const Sum_Digits = (num) => {
    let sum = 0;
    while (num) {
        let rem = num % 10;
        sum = sum + rem;
        num = paresInt(num / 10)
    }
    return sum;
}

const Print_Pattern = (num) => {
    let s = '';
    for(let i = 0; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            s += "*";
        }
        s += '\n';
    }
    console.log(s)
}

const Prime_Check = (num) => {
    let isPrime = true;
	if (num == 1) {
        return 'NO';
    }
	else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
    else {
        return 'NO';
    }
};

function arrayMin(arr) {
    let min = 100;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function arrayMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const Count_Vowels= (S) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let letter of S.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
};

const Palin_Check = (str) => {
    let revStr = str.split('').reverse().join('');
    if (str === revStr) {
        return 'True';
    }
    return 'False';
}


const Minimal_Angle = (h, m) => {
    if (h == 12) h = 0;
    if (m == 60) m = 0;

    let hour_angle = 0.5 * (h * 60 + m);
    let min_angle = 6 * m;

    let angle = Math.abs(hour_angle - min_angle);

    angle = Math.min(360 - angle, angle);
    return angle;
};

const Check_Leap = (year) => {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return "Leap Year";
    } else {
        return "Non Leap Year";
    }
};

const Perfect_Check = (num) => {
    let sum = 0;
    for(let i = 1; i <= num / 2; i++) {
        if(num % i === 0) {
            sum += i;
        }
    }
    if(sum === num && sum !== 0) {
        return "YES";
    }
    else {
        return "NO";
    }
};

const Rev_Number = (num) => {
    let rev = 0;
    while (num != 0) {
        let lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = parseInt(num / 10);
    }
    return rev;
}


const ascendArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

const descendArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

const removeDuplicate = (arr) => {
    let result = [];
    arr.forEach((ele) => {
        if(!result.includes(ele)) {
            result.push(ele)
        }
    })
    return result;
}

const removeDuplicate2 = (arr) => {
    return [...new Set(arr)]
}

const hcfLcm = (num1, num2) => {
    let hcf;
    for(let i = 1; i<=num1 && i<=num2; i++) {
        if(num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }
    let lcm = (num1 * num2) / hcf;
    return [hcf, lcm];
}

const Factorial = (n) => {
    if (n < 0) {
        return 'Factorial for negative number';
    }
    else if (n == 0) {
        return 1;
    } else {
        let fact = 1;
        for(let i = 1; i <= n; i++) {
            fact = fact * i
        }
        return fact;
    }
}



var Count_Occ = (s) =>
{
  // let newStr ='';
  // let arr = s.split('');
  // let sorted = arr.sort();
  // let str = sorted.join(''); //beepprsty
  // for(let i = 0; i < str.length; i++) {
  //   let count = str.split(str[i]).length - 1;
  //   if (!(newStr).includes(str[i])) {
  //     if(count > 1) {
  //       newStr = newStr + str[i] + count;
  //     }
  //   }
  // }
  // return newStr;


  let freq = new Array(26);
  freq.fill(0);

  for (let i = 0; i < s.length; i++) {
    let idx = s[i].charCodeAt() - 'a'.charCodeAt();
    freq[idx] = freq[idx] + 1;
  }

  let ans ='';

  for(let i = 0; i < 26; i++) {
    if(freq[i] > 1) {
      //convert to char
      ans += String.fromCharCode(i + 'a'.charCodeAt()); //char
      ans += freq[i] // freq
    }
  }

  return ans;
};


function concat(...args) {
	let ans =[];
	for(let i = 0; i <args.length; i++) {
		for(let j = 0; j < args[i].length; j++) {
			ans.push(args[i][j])
		}
	}
	return ans;
}


// program to get the URL

const url1 = window.location.href;
const url2 = document.URL;



function fibo (number) {
    let n1 = 0, n2 = 1, nextTerm;
    let arr = [];

    for (let i = 1; i <= number; i++) {
        // console.log(n1);
        arr.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return arr;
}


// FIbTri

function fiboTri (n) {
    let n1 = 0, n2 = 1, nextTerm;
    let ans="";

    for(let i = 2; i <= n; i++) {
        n1=0;
        n2=1;
        ans += n2 + " "
        for(let j = 1; j < i; j++) {
            nextTerm = n1 + n2;
            ans += nextTerm + " "
            n1 = n2;
            n2 = nextTerm;
        }
        ans += "\n"
    }
    console.log(ans)
}


let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) /


// var sortArray = function(nums) {
//     while (true) {
//         let swap = false;
//         for (let i = 0; i < nums.length-1; i++) {
//             if (nums[i] > nums[i+1]) {
//                 swap = true;
//                 let temp = nums[i];
//                 nums[i] = nums[i+1];
//                 nums[i+1] = temp;
//             }
//         }
//         if (!swap) return nums;
//     }
// };


// var twoSum = function(nums, target) {

    //     let secondNumObj = {}

    //     for (let i = 0; i < nums.length; i++) {
    //         let secondNum = target - nums[i]
    //         if(secondNum in secondNumObj) {
    //             return [secondNumObj[secondNum], i]
    //         }
    //         secondNumObj[nums[i]] = i;
    //     }
// }



// Algorithm:
// Traverse the array from start to end.
// For every element, traverse the array from start to that index and find the maximum height (a) and traverse the array from the current index to end, and find the maximum height (b).
// The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored
// Print the total amount of water stored.


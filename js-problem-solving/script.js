const last_digit = (num) => {
    let rem = num % 10;
    return rem;
}

const first_digit = (num) => {
    while (num >= 10) {
        num /= 10;
    }
    return num;
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
        for(let j = 1; j <= i; i++) {
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
    }     S
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